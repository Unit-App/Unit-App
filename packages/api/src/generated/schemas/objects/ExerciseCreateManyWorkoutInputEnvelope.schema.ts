import { z } from 'zod';
import { ExerciseCreateManyWorkoutInputObjectSchema } from './ExerciseCreateManyWorkoutInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExerciseCreateManyWorkoutInputEnvelope> = z
  .object({
    data: z.lazy(() => ExerciseCreateManyWorkoutInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ExerciseCreateManyWorkoutInputEnvelopeObjectSchema = Schema;
