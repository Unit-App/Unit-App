import { z } from 'zod';
import { WorkoutArgsObjectSchema } from './WorkoutArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExerciseInclude> = z
  .object({
    workout: z
      .union([z.boolean(), z.lazy(() => WorkoutArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const ExerciseIncludeObjectSchema = Schema;
