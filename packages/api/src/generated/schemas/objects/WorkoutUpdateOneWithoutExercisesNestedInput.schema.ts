import { z } from 'zod';
import { WorkoutCreateWithoutExercisesInputObjectSchema } from './WorkoutCreateWithoutExercisesInput.schema';
import { WorkoutUncheckedCreateWithoutExercisesInputObjectSchema } from './WorkoutUncheckedCreateWithoutExercisesInput.schema';
import { WorkoutCreateOrConnectWithoutExercisesInputObjectSchema } from './WorkoutCreateOrConnectWithoutExercisesInput.schema';
import { WorkoutUpsertWithoutExercisesInputObjectSchema } from './WorkoutUpsertWithoutExercisesInput.schema';
import { WorkoutWhereUniqueInputObjectSchema } from './WorkoutWhereUniqueInput.schema';
import { WorkoutUpdateWithoutExercisesInputObjectSchema } from './WorkoutUpdateWithoutExercisesInput.schema';
import { WorkoutUncheckedUpdateWithoutExercisesInputObjectSchema } from './WorkoutUncheckedUpdateWithoutExercisesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.WorkoutUpdateOneWithoutExercisesNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => WorkoutCreateWithoutExercisesInputObjectSchema),
        z.lazy(() => WorkoutUncheckedCreateWithoutExercisesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => WorkoutCreateOrConnectWithoutExercisesInputObjectSchema)
      .optional(),
    upsert: z
      .lazy(() => WorkoutUpsertWithoutExercisesInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => WorkoutWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => WorkoutUpdateWithoutExercisesInputObjectSchema),
        z.lazy(() => WorkoutUncheckedUpdateWithoutExercisesInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const WorkoutUpdateOneWithoutExercisesNestedInputObjectSchema = Schema;
