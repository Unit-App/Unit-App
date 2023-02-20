import { TRPCError } from "@trpc/server";
import { Prisma } from "@acme/db";
import { Context } from "../context";

export const createManyWorkoutHandler = async ({
    input,
    ctx,
}: {
    input: Prisma.WorkoutCreateManyInput;
    ctx: Context;
}) => {
    try {
        const workout = await ctx.prisma.workout.createMany({
            data: { title: input.title, lastPreformed: input.lastPreformed },
        });

        return {
            status: "success",
            data: {
                workout,
            },
        };
    } catch (err) {
        if (err instanceof TRPCError && err.code === "INTERNAL_SERVER_ERROR") {
            throw new TRPCError({
                code: "CONFLICT",
                message: "Workout with that title already exists",
            });
        }
        throw err;
    }
};

export const createWorkoutHandler = async ({ input, ctx }: { input: Prisma.WorkoutCreateInput; ctx: Context }) => {
    try {
        const workout = await ctx.prisma.workout.create({
            data: {
                lastPreformed: input.lastPreformed,
                title: input.title,
                exercises: {
                    create: input.exercises?.create,
                },
            },
        });

        return {
            status: "success",
            data: {
                workout,
            },
        };
    } catch (err) {
        if (err instanceof TRPCError && err.code === "INTERNAL_SERVER_ERROR") {
            throw new TRPCError({
                code: "CONFLICT",
                message: "Workout with that title already exists",
            });
        }
        throw err;
    }
};

export const getWorkoutHandler = async ({ input, ctx }: { input: Prisma.WorkoutWhereUniqueInput; ctx: Context }) => {
    const workout = await ctx.prisma.workout.findUniqueOrThrow({
        where: {
            id: input.id,
        },
        include: { exercises: true },
    });

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

export const getWorkoutsHandler = async ({ input, ctx }: { input: Prisma.WorkoutFindManyArgs; ctx: Context }) => {
    try {
        const workout = await ctx.prisma.workout.findMany({
            include: { exercises: true },
            skip: input.skip,
            take: input.take,
        });

        return {
            status: "success",
            results: workout.length,
            data: {
                workout,
            },
        };
    } catch (err) {
        if (err instanceof TRPCError && err.code === "INTERNAL_SERVER_ERROR") {
            throw new TRPCError({
                code: "INTERNAL_SERVER_ERROR",
                message: err.message,
            });
        }
    }
};

export const updateWorkoutHandler = async ({
    input,
    ctx,
}: {
    input: Prisma.WorkoutUncheckedUpdateInput;
    ctx: Context;
}) => {
    const workout = await ctx.prisma.workout.update({
        where: { id: input.id as string | undefined },
        data: {
            title: input.title,
            lastPreformed: input.lastPreformed,
        },

        include: { exercises: true },
    });

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

export const updateManyWorkoutHandler = async ({
    input,
    ctx,
}: {
    input: Prisma.WorkoutUpdateManyMutationInput;
    ctx: Context;
}) => {
    const workout = await ctx.prisma.workout.updateMany({
        where: { id: input.id as string | undefined | Prisma.StringFilter },
        data: {
            title: input.title,
            lastPreformed: input.lastPreformed,
        },
    });

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

export const deleteWorkoutHandler = async ({ input, ctx }: { input: Prisma.WorkoutWhereUniqueInput; ctx: Context }) => {
    const workout = await ctx.prisma.workout.delete({ where: { id: input.id } });

    if (!workout) {
        throw new TRPCError({
            code: "NOT_FOUND",
            message: "Workout with that ID not found",
        });
    }

    return {
        status: "success",
        data: workout,
    };
};

export const deleteManyWorkoutHandler = async ({ input, ctx }: { input: Prisma.WorkoutWhereInput; ctx: Context }) => {
    const workout = await ctx.prisma.workout.deleteMany({ where: input });

    if (!workout) {
        throw new TRPCError({
            code: "NOT_FOUND",
            message: "Workouts with that IDs not found",
        });
    }

    return {
        status: "success",
        data: workout,
    };
};
