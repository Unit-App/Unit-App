import { z } from "zod";
import { WorkoutCreateWithoutExercisesInputObjectSchema } from "./WorkoutCreateWithoutExercisesInput.schema";
import { WorkoutUncheckedCreateWithoutExercisesInputObjectSchema } from "./WorkoutUncheckedCreateWithoutExercisesInput.schema";
import { WorkoutCreateOrConnectWithoutExercisesInputObjectSchema } from "./WorkoutCreateOrConnectWithoutExercisesInput.schema";
import { WorkoutWhereUniqueInputObjectSchema } from "./WorkoutWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutCreateNestedOneWithoutExercisesInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => WorkoutCreateWithoutExercisesInputObjectSchema),
                z.lazy(() => WorkoutUncheckedCreateWithoutExercisesInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => WorkoutCreateOrConnectWithoutExercisesInputObjectSchema).optional(),
        connect: z.lazy(() => WorkoutWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const WorkoutCreateNestedOneWithoutExercisesInputObjectSchema = Schema;
