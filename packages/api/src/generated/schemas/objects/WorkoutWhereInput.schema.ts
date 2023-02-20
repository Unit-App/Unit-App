import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { ExerciseListRelationFilterObjectSchema } from './ExerciseListRelationFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WorkoutWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => WorkoutWhereInputObjectSchema),
        z.lazy(() => WorkoutWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => WorkoutWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => WorkoutWhereInputObjectSchema),
        z.lazy(() => WorkoutWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    lastPreformed: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    exercises: z.lazy(() => ExerciseListRelationFilterObjectSchema).optional(),
    created_at: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    updated_at: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
  })
  .strict();

export const WorkoutWhereInputObjectSchema = Schema;
