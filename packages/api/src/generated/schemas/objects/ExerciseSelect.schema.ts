import { z } from 'zod';
import { WorkoutArgsObjectSchema } from './WorkoutArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExerciseSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    reps: z.boolean().optional(),
    sets: z.boolean().optional(),
    workout: z
      .union([z.boolean(), z.lazy(() => WorkoutArgsObjectSchema)])
      .optional(),
    created_at: z.boolean().optional(),
    updated_at: z.boolean().optional(),
  })
  .strict();

export const ExerciseSelectObjectSchema = Schema;
