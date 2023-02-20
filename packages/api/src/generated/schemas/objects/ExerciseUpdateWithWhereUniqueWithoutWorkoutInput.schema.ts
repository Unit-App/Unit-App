import { z } from 'zod';
import { ExerciseWhereUniqueInputObjectSchema } from './ExerciseWhereUniqueInput.schema';
import { ExerciseUpdateWithoutWorkoutInputObjectSchema } from './ExerciseUpdateWithoutWorkoutInput.schema';
import { ExerciseUncheckedUpdateWithoutWorkoutInputObjectSchema } from './ExerciseUncheckedUpdateWithoutWorkoutInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExerciseUpdateWithWhereUniqueWithoutWorkoutInput> =
  z
    .object({
      where: z.lazy(() => ExerciseWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ExerciseUpdateWithoutWorkoutInputObjectSchema),
        z.lazy(() => ExerciseUncheckedUpdateWithoutWorkoutInputObjectSchema),
      ]),
    })
    .strict();

export const ExerciseUpdateWithWhereUniqueWithoutWorkoutInputObjectSchema =
  Schema;
