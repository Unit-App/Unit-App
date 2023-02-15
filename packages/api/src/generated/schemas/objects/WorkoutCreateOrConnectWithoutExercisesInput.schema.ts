import { z } from "zod";
import { WorkoutWhereUniqueInputObjectSchema } from "./WorkoutWhereUniqueInput.schema";
import { WorkoutCreateWithoutExercisesInputObjectSchema } from "./WorkoutCreateWithoutExercisesInput.schema";
import { WorkoutUncheckedCreateWithoutExercisesInputObjectSchema } from "./WorkoutUncheckedCreateWithoutExercisesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutCreateOrConnectWithoutExercisesInput> = z
    .object({
        where: z.lazy(() => WorkoutWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => WorkoutCreateWithoutExercisesInputObjectSchema),
            z.lazy(() => WorkoutUncheckedCreateWithoutExercisesInputObjectSchema),
        ]),
    })
    .strict();

export const WorkoutCreateOrConnectWithoutExercisesInputObjectSchema = Schema;
