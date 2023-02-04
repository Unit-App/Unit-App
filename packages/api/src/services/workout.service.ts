/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Prisma } from "@prisma/client";
import { prisma } from "../../../db/index";

export const createWorkout = async (input: Prisma.WorkoutCreateInput) => {
    return await prisma.workout.create({
        data: input,
    });
};

export const findWorkout = async (where: Partial<Prisma.WorkoutWhereInput>, select?: Prisma.WorkoutSelect) => {
    return (await prisma.workout.findFirst({
        where,
        select,
    }));
};

export const findUniqueWorkout = async (where: Prisma.WorkoutWhereUniqueInput, select?: Prisma.WorkoutSelect) => {
    return (await prisma.workout.findUnique({
        where,
        select,
    }));
};

export const findAllWorkouts = async (page: number, limit: number) => {
    const take = limit || 10;
    const skip = (page - 1) * limit;
    return (await prisma.workout.findMany({
        include: { exercises: true },
        skip,
        take,
    }));
};

export const updateWorkout = async (
    where: Partial<Prisma.WorkoutWhereUniqueInput>,
    data: Prisma.WorkoutUpdateInput,
    select?: Prisma.WorkoutSelect,
) => {
    return (await prisma.workout.update({ where, data, select }));
};

export const deleteWorkout = async (where: Prisma.WorkoutWhereUniqueInput) => {
    return await prisma.workout.delete({ where });
};
