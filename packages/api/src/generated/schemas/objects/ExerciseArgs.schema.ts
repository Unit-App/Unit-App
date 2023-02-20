import { z } from 'zod';
import { ExerciseSelectObjectSchema } from './ExerciseSelect.schema';
import { ExerciseIncludeObjectSchema } from './ExerciseInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExerciseArgs> = z
  .object({
    select: z.lazy(() => ExerciseSelectObjectSchema).optional(),
    include: z.lazy(() => ExerciseIncludeObjectSchema).optional(),
  })
  .strict();

export const ExerciseArgsObjectSchema = Schema;
