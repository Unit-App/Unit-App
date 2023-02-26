import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExerciseMinOrderByAggregateInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        reps: z.lazy(() => SortOrderSchema).optional(),
        sets: z.lazy(() => SortOrderSchema).optional(),
        created_at: z.lazy(() => SortOrderSchema).optional(),
        updated_at: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ExerciseMinOrderByAggregateInputObjectSchema = Schema;
