/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { TRPCError } from "@trpc/server";
import { Context } from "../context";
import { CreateWorkoutInput, FilterQueryInput, ParamsInput, UpdateWorkoutInput } from "../schema/workout.schema";
import {
    createWorkout,
    deleteWorkout,
    findAllWorkouts,
    findUniqueWorkout,
    updateWorkout,
} from "../services/workout.service";
import { Prisma, Workout } from "@acme/db";

export const createWorkoutHandler = async ({ input, ctx }: { input: CreateWorkoutInput; ctx: Context }) => {
    try {
        const workout = await createWorkout({
            lastPreformed: input.lastPreformed,
            title: input.title,
            exercises: {
                create: input.exercises,
            },
        });

        return {
            status: "success",
            data: {
                workout,
            },
        };
    } catch (err: any) {
        if (err.code === "P2002") {
            throw new TRPCError({
                code: "CONFLICT",
                message: "Workout with that title already exists",
            });
        }
        throw err;
    }
};

export const getWorkoutHandler = async ({ paramsInput }: { paramsInput: ParamsInput }) => {
    const workout = await findUniqueWorkout({ id: paramsInput.workoutId });

    if (!workout) {
        throw new TRPCError({
            code: "NOT_FOUND",
            message: "Workout with that ID not found",
        });
    }

    return {
        status: "success",
        data: {
            workout,
        },
    };
};

export const getWorkoutsHandler = async ({ filterQuery }: { filterQuery: FilterQueryInput }) => {
    try {
        const workout = await findAllWorkouts(filterQuery.page, filterQuery.limit);

        return {
            status: "success",
            results: workout.length,
            data: {
                workout,
            },
        };
    } catch (err: any) {
        throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: err.message,
        });
    }
};

export const updateWorkoutHandler = async ({
    paramsInput,
    input,
}: {
    paramsInput: ParamsInput;
    input: UpdateWorkoutInput;
}) => {
    const workout = await updateWorkout({ id: paramsInput.workoutId }, input as Prisma.WorkoutUpdateInput);

    if (!workout) {
        throw new TRPCError({
            code: "NOT_FOUND",
            message: "Workout with that ID not found",
        });
    }

    return {
        status: "success",
        data: {
            workout,
        },
    };
};

export const deleteWorkoutHandler = async ({ paramsInput }: { paramsInput: ParamsInput }) => {
    const workout = await deleteWorkout({ id: paramsInput.workoutId });

    if (!workout) {
        throw new TRPCError({
            code: "NOT_FOUND",
            message: "Workout with that ID not found",
        });
    }

    return {
        status: "success",
        data: null,
    };
};