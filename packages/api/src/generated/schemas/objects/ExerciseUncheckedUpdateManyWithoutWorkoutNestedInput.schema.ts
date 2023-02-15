import { z } from "zod";
import { ExerciseCreateWithoutWorkoutInputObjectSchema } from "./ExerciseCreateWithoutWorkoutInput.schema";
import { ExerciseUncheckedCreateWithoutWorkoutInputObjectSchema } from "./ExerciseUncheckedCreateWithoutWorkoutInput.schema";
import { ExerciseCreateOrConnectWithoutWorkoutInputObjectSchema } from "./ExerciseCreateOrConnectWithoutWorkoutInput.schema";
import { ExerciseUpsertWithWhereUniqueWithoutWorkoutInputObjectSchema } from "./ExerciseUpsertWithWhereUniqueWithoutWorkoutInput.schema";
import { ExerciseCreateManyWorkoutInputEnvelopeObjectSchema } from "./ExerciseCreateManyWorkoutInputEnvelope.schema";
import { ExerciseWhereUniqueInputObjectSchema } from "./ExerciseWhereUniqueInput.schema";
import { ExerciseUpdateWithWhereUniqueWithoutWorkoutInputObjectSchema } from "./ExerciseUpdateWithWhereUniqueWithoutWorkoutInput.schema";
import { ExerciseUpdateManyWithWhereWithoutWorkoutInputObjectSchema } from "./ExerciseUpdateManyWithWhereWithoutWorkoutInput.schema";
import { ExerciseScalarWhereInputObjectSchema } from "./ExerciseScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExerciseUncheckedUpdateManyWithoutWorkoutNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => ExerciseCreateWithoutWorkoutInputObjectSchema),
                z.lazy(() => ExerciseCreateWithoutWorkoutInputObjectSchema).array(),
                z.lazy(() => ExerciseUncheckedCreateWithoutWorkoutInputObjectSchema),
                z.lazy(() => ExerciseUncheckedCreateWithoutWorkoutInputObjectSchema).array(),
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => ExerciseCreateOrConnectWithoutWorkoutInputObjectSchema),
                z.lazy(() => ExerciseCreateOrConnectWithoutWorkoutInputObjectSchema).array(),
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => ExerciseUpsertWithWhereUniqueWithoutWorkoutInputObjectSchema),
                z.lazy(() => ExerciseUpsertWithWhereUniqueWithoutWorkoutInputObjectSchema).array(),
            ])
            .optional(),
        createMany: z.lazy(() => ExerciseCreateManyWorkoutInputEnvelopeObjectSchema).optional(),
        set: z
            .union([
                z.lazy(() => ExerciseWhereUniqueInputObjectSchema),
                z.lazy(() => ExerciseWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        disconnect: z
            .union([
                z.lazy(() => ExerciseWhereUniqueInputObjectSchema),
                z.lazy(() => ExerciseWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        delete: z
            .union([
                z.lazy(() => ExerciseWhereUniqueInputObjectSchema),
                z.lazy(() => ExerciseWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        connect: z
            .union([
                z.lazy(() => ExerciseWhereUniqueInputObjectSchema),
                z.lazy(() => ExerciseWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
        update: z
            .union([
                z.lazy(() => ExerciseUpdateWithWhereUniqueWithoutWorkoutInputObjectSchema),
                z.lazy(() => ExerciseUpdateWithWhereUniqueWithoutWorkoutInputObjectSchema).array(),
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => ExerciseUpdateManyWithWhereWithoutWorkoutInputObjectSchema),
                z.lazy(() => ExerciseUpdateManyWithWhereWithoutWorkoutInputObjectSchema).array(),
            ])
            .optional(),
        deleteMany: z
            .union([
                z.lazy(() => ExerciseScalarWhereInputObjectSchema),
                z.lazy(() => ExerciseScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict();

export const ExerciseUncheckedUpdateManyWithoutWorkoutNestedInputObjectSchema = Schema;
