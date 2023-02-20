import { z } from 'zod';
import { WorkoutCreateNestedOneWithoutExercisesInputObjectSchema } from './WorkoutCreateNestedOneWithoutExercisesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExerciseCreateInput> = z
  .object({
    name: z.string(),
    reps: z.number(),
    sets: z.number(),
    workout: z
      .lazy(() => WorkoutCreateNestedOneWithoutExercisesInputObjectSchema)
      .optional(),
    created_at: z.date().optional().nullable(),
    updated_at: z.date().optional().nullable(),
  })
  .strict();

export const ExerciseCreateInputObjectSchema = Schema;
