import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { WorkoutCountOrderByAggregateInputObjectSchema } from "./WorkoutCountOrderByAggregateInput.schema";
import { WorkoutMaxOrderByAggregateInputObjectSchema } from "./WorkoutMaxOrderByAggregateInput.schema";
import { WorkoutMinOrderByAggregateInputObjectSchema } from "./WorkoutMinOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutOrderByWithAggregationInput> = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        title: z.lazy(() => SortOrderSchema).optional(),
        lastPreformed: z.lazy(() => SortOrderSchema).optional(),
        created_at: z.lazy(() => SortOrderSchema).optional(),
        updated_at: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => WorkoutCountOrderByAggregateInputObjectSchema).optional(),
        _max: z.lazy(() => WorkoutMaxOrderByAggregateInputObjectSchema).optional(),
        _min: z.lazy(() => WorkoutMinOrderByAggregateInputObjectSchema).optional(),
    })
    .strict();

export const WorkoutOrderByWithAggregationInputObjectSchema = Schema;
