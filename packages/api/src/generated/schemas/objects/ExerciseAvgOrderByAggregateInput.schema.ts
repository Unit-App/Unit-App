import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExerciseAvgOrderByAggregateInput> = z
  .object({
    reps: z.lazy(() => SortOrderSchema).optional(),
    sets: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ExerciseAvgOrderByAggregateInputObjectSchema = Schema;
