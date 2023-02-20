import { z } from 'zod';
import { ExerciseFindManySchema } from '../findManyExercise.schema';
import { WorkoutCountOutputTypeArgsObjectSchema } from './WorkoutCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WorkoutInclude> = z
  .object({
    exercises: z
      .union([z.boolean(), z.lazy(() => ExerciseFindManySchema)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => WorkoutCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const WorkoutIncludeObjectSchema = Schema;
