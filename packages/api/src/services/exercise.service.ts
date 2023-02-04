/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Prisma } from "@prisma/client";
import { prisma } from "@acme/db";

export const createExercise = async (input: Prisma.ExerciseCreateInput) => {
    return await prisma.exercise.create({
        data: input,
    });
};

export const findExercise = async (where: Partial<Prisma.ExerciseWhereInput>, select?: Prisma.ExerciseSelect) => {
    return await prisma.exercise.findFirst({
        where,
        select,
    });
};

export const findUniqueExercise = async (where: Prisma.ExerciseWhereUniqueInput, select?: Prisma.ExerciseSelect) => {
    return await prisma.exercise.findUnique({
        where,
        select,
    });
};

export const findAllExercises = async (page: number, limit: number) => {
    const take = limit || 10;
    const skip = (page - 1) * limit;
    return await prisma.exercise.findMany({
        skip,
        take,
    });
};

export const updateExercise = async (
    where: Partial<Prisma.ExerciseWhereUniqueInput>,
    data: Prisma.ExerciseUpdateInput,
    select?: Prisma.ExerciseSelect,
) => {
    return await prisma.exercise.update({ where, data, select });
};

export const deleteExercise = async (where: Prisma.ExerciseWhereUniqueInput) => {
    return await prisma.exercise.delete({ where });
};
