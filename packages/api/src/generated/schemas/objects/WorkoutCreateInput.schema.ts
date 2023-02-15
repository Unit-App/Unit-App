import { z } from "zod";
import { ExerciseCreateNestedManyWithoutWorkoutInputObjectSchema } from "./ExerciseCreateNestedManyWithoutWorkoutInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutCreateInput> = z
    .object({
        id: z.string().optional(),
        title: z.string(),
        lastPreformed: z.string(),
        exercises: z.lazy(() => ExerciseCreateNestedManyWithoutWorkoutInputObjectSchema).optional(),
        created_at: z.date().optional().nullable(),
        updated_at: z.date().optional().nullable(),
    })
    .strict();

export const WorkoutCreateInputObjectSchema = Schema;
