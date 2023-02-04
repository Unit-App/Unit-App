/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { TRPCError } from "@trpc/server";
import { Context } from "../context";
import { CreateExerciseInput, FilterQueryInput, ParamsInput, UpdateExerciseInput } from "../schema/exercise.schema";
import {
    createExercise,
    deleteExercise,
    findAllExercises,
    findUniqueExercise,
    updateExercise,
} from "../services/exercise.service";
import { Prisma, Exercise } from "@acme/db";

export const createExerciseHandler = async ({ input, ctx }: { input: CreateExerciseInput; ctx: Context }) => {
    try {
        const exercise = await createExercise({
            name: input.name,
            reps: input.reps,
            sets: input.sets,
        });

        return {
            status: "success",
            data: {
                exercise,
            },
        };
    } catch (err: any) {
        if (err.code === "P2002") {
            throw new TRPCError({
                code: "CONFLICT",
                message: "Exercise with that title already exists",
            });
        }
        throw err;
    }
};

export const getExerciseHandler = async ({ paramsInput }: { paramsInput: ParamsInput }) => {
    const exercise = await findUniqueExercise({ id: paramsInput.exerciseId });

    if (!exercise) {
        throw new TRPCError({
            code: "NOT_FOUND",
            message: "Exercise with that ID not found",
        });
    }

    return {
        status: "success",
        data: {
            exercise,
        },
    };
};

export const getExercisesHandler = async ({ filterQuery }: { filterQuery: FilterQueryInput }) => {
    try {
        const exercise = await findAllExercises(filterQuery.page, filterQuery.limit);

        return {
            status: "success",
            results: exercise.length,
            data: {
                exercise,
            },
        };
    } catch (err: any) {
        throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: err.message,
        });
    }
};

export const updateExerciseHandler = async ({
    paramsInput,
    input,
}: {
    paramsInput: ParamsInput;
    input: UpdateExerciseInput;
}) => {
    const exercise = await updateExercise({ id: paramsInput.exerciseId }, input as Prisma.ExerciseUpdateInput);

    if (!exercise) {
        throw new TRPCError({
            code: "NOT_FOUND",
            message: "Exercise with that ID not found",
        });
    }

    return {
        status: "success",
        data: {
            exercise,
        },
    };
};

export const deleteExerciseHandler = async ({ paramsInput }: { paramsInput: ParamsInput }) => {
    const exercise = await deleteExercise({ id: paramsInput.exerciseId });

    if (!exercise) {
        throw new TRPCError({
            code: "NOT_FOUND",
            message: "Exercise with that ID not found",
        });
    }

    return {
        status: "success",
        data: null,
    };
};
