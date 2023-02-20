import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WorkoutCreateManyInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    lastPreformed: z.string(),
    created_at: z.date().optional().nullable(),
    updated_at: z.date().optional().nullable(),
  })
  .strict();

export const WorkoutCreateManyInputObjectSchema = Schema;
