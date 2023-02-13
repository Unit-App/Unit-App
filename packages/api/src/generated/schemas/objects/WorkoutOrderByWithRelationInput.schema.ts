import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { ExerciseOrderByRelationAggregateInputObjectSchema } from "./ExerciseOrderByRelationAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutOrderByWithRelationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        title: z.lazy(() => SortOrderSchema).optional(),
        lastPreformed: z.lazy(() => SortOrderSchema).optional(),
        exercises: z.lazy(() => ExerciseOrderByRelationAggregateInputObjectSchema).optional(),
        created_at: z.lazy(() => SortOrderSchema).optional(),
        updated_at: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const WorkoutOrderByWithRelationInputObjectSchema = Schema;
