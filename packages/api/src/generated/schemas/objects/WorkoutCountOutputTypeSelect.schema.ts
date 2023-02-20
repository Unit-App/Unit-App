import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WorkoutCountOutputTypeSelect> = z
  .object({
    exercises: z.boolean().optional(),
  })
  .strict();

export const WorkoutCountOutputTypeSelectObjectSchema = Schema;
