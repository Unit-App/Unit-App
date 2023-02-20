import { z } from 'zod';
import { ExerciseWhereUniqueInputObjectSchema } from './ExerciseWhereUniqueInput.schema';
import { ExerciseUpdateWithoutWorkoutInputObjectSchema } from './ExerciseUpdateWithoutWorkoutInput.schema';
import { ExerciseUncheckedUpdateWithoutWorkoutInputObjectSchema } from './ExerciseUncheckedUpdateWithoutWorkoutInput.schema';
import { ExerciseCreateWithoutWorkoutInputObjectSchema } from './ExerciseCreateWithoutWorkoutInput.schema';
import { ExerciseUncheckedCreateWithoutWorkoutInputObjectSchema } from './ExerciseUncheckedCreateWithoutWorkoutInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ExerciseUpsertWithWhereUniqueWithoutWorkoutInput> =
  z
    .object({
      where: z.lazy(() => ExerciseWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ExerciseUpdateWithoutWorkoutInputObjectSchema),
        z.lazy(() => ExerciseUncheckedUpdateWithoutWorkoutInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ExerciseCreateWithoutWorkoutInputObjectSchema),
        z.lazy(() => ExerciseUncheckedCreateWithoutWorkoutInputObjectSchema),
      ]),
    })
    .strict();

export const ExerciseUpsertWithWhereUniqueWithoutWorkoutInputObjectSchema =
  Schema;
