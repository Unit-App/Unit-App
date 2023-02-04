import { RelatedWorkoutModel } from "@acme/db/prisma/zod";
import { number, object, string, TypeOf } from "zod";

export const createWorkoutSchema = RelatedWorkoutModel;

export const params = object({
    workoutId: string(),
});

export const updateWorkoutSchema = object({
    params,
    body: RelatedWorkoutModel,
});

export const filterQuery = object({
    limit: number().default(1),
    page: number().default(10),
});

export type CreateWorkoutInput = TypeOf<typeof createWorkoutSchema>;
export type ParamsInput = TypeOf<typeof params>;
export type UpdateWorkoutInput = TypeOf<typeof updateWorkoutSchema>["body"];
export type FilterQueryInput = TypeOf<typeof filterQuery>;
