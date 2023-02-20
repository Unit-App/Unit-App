import { z } from 'zod';
import { ExerciseFindManySchema } from '../findManyExercise.schema';
import { WorkoutCountOutputTypeArgsObjectSchema } from './WorkoutCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WorkoutSelect> = z
  .object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    lastPreformed: z.boolean().optional(),
    exercises: z
      .union([z.boolean(), z.lazy(() => ExerciseFindManySchema)])
      .optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => WorkoutCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const WorkoutSelectObjectSchema = Schema;
