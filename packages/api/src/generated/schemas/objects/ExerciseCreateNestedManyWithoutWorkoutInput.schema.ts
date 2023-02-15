import { z } from "zod";
import { ExerciseCreateWithoutWorkoutInputObjectSchema } from "./ExerciseCreateWithoutWorkoutInput.schema";
import { ExerciseUncheckedCreateWithoutWorkoutInputObjectSchema } from "./ExerciseUncheckedCreateWithoutWorkoutInput.schema";
import { ExerciseCreateOrConnectWithoutWorkoutInputObjectSchema } from "./ExerciseCreateOrConnectWithoutWorkoutInput.schema";
import { ExerciseCreateManyWorkoutInputEnvelopeObjectSchema } from "./ExerciseCreateManyWorkoutInputEnvelope.schema";
import { ExerciseWhereUniqueInputObjectSchema } from "./ExerciseWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExerciseCreateNestedManyWithoutWorkoutInput> = z
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
        createMany: z.lazy(() => ExerciseCreateManyWorkoutInputEnvelopeObjectSchema).optional(),
        connect: z
            .union([
                z.lazy(() => ExerciseWhereUniqueInputObjectSchema),
                z.lazy(() => ExerciseWhereUniqueInputObjectSchema).array(),
            ])
            .optional(),
    })
    .strict();

export const ExerciseCreateNestedManyWithoutWorkoutInputObjectSchema = Schema;
