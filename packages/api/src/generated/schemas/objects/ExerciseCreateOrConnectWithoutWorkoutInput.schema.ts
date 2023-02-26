import { z } from "zod";
import { ExerciseWhereUniqueInputObjectSchema } from "./ExerciseWhereUniqueInput.schema";
import { ExerciseCreateWithoutWorkoutInputObjectSchema } from "./ExerciseCreateWithoutWorkoutInput.schema";
import { ExerciseUncheckedCreateWithoutWorkoutInputObjectSchema } from "./ExerciseUncheckedCreateWithoutWorkoutInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExerciseCreateOrConnectWithoutWorkoutInput> = z
    .object({
        where: z.lazy(() => ExerciseWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => ExerciseCreateWithoutWorkoutInputObjectSchema),
            z.lazy(() => ExerciseUncheckedCreateWithoutWorkoutInputObjectSchema),
        ]),
    })
    .strict();

export const ExerciseCreateOrConnectWithoutWorkoutInputObjectSchema = Schema;
