import { ExerciseModel } from "@acme/db/prisma/zod";
import { number, object, string, TypeOf } from "zod";

export const createExerciseSchema = ExerciseModel;

export const params = object({
    exerciseId: string(),
});

export const updateExerciseSchema = object({
    params,
    body: ExerciseModel,
});

export const filterQuery = object({
    limit: number().default(1),
    page: number().default(10),
});

export type CreateExerciseInput = TypeOf<typeof createExerciseSchema>;
export type ParamsInput = TypeOf<typeof params>;
export type UpdateExerciseInput = TypeOf<typeof updateExerciseSchema>["body"];
export type FilterQueryInput = TypeOf<typeof filterQuery>;
