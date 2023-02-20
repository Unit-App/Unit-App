import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { WorkoutRelationFilterObjectSchema } from './WorkoutRelationFilter.schema';
import { WorkoutWhereInputObjectSchema } from './WorkoutWhereInput.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExerciseWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ExerciseWhereInputObjectSchema),
        z.lazy(() => ExerciseWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ExerciseWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ExerciseWhereInputObjectSchema),
        z.lazy(() => ExerciseWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    reps: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    sets: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    workout: z
      .union([
        z.lazy(() => WorkoutRelationFilterObjectSchema),
        z.lazy(() => WorkoutWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
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

export const ExerciseWhereInputObjectSchema = Schema;
