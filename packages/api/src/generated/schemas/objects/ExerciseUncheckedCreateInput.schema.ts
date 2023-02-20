import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExerciseUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    reps: z.number(),
    sets: z.number(),
    created_at: z.date().optional().nullable(),
    updated_at: z.date().optional().nullable(),
  })
  .strict();

export const ExerciseUncheckedCreateInputObjectSchema = Schema;
