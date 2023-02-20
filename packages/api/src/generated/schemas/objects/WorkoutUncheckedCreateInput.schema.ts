import { z } from 'zod';
import { ExerciseUncheckedCreateNestedManyWithoutWorkoutInputObjectSchema } from './ExerciseUncheckedCreateNestedManyWithoutWorkoutInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WorkoutUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    lastPreformed: z.string(),
    exercises: z
      .lazy(
        () => ExerciseUncheckedCreateNestedManyWithoutWorkoutInputObjectSchema,
      )
      .optional(),
    created_at: z.date().optional().nullable(),
    updated_at: z.date().optional().nullable(),
  })
  .strict();

export const WorkoutUncheckedCreateInputObjectSchema = Schema;
