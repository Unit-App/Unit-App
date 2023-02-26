import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { WorkoutOrderByWithRelationInputObjectSchema } from "./WorkoutOrderByWithRelationInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExerciseOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        reps: z.lazy(() => SortOrderSchema).optional(),
        sets: z.lazy(() => SortOrderSchema).optional(),
        workout: z.lazy(() => WorkoutOrderByWithRelationInputObjectSchema).optional(),
        created_at: z.lazy(() => SortOrderSchema).optional(),
        updated_at: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ExerciseOrderByWithRelationInputObjectSchema = Schema;
