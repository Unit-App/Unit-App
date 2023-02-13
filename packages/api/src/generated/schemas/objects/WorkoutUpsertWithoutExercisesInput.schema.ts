import { z } from "zod";
import { WorkoutUpdateWithoutExercisesInputObjectSchema } from "./WorkoutUpdateWithoutExercisesInput.schema";
import { WorkoutUncheckedUpdateWithoutExercisesInputObjectSchema } from "./WorkoutUncheckedUpdateWithoutExercisesInput.schema";
import { WorkoutCreateWithoutExercisesInputObjectSchema } from "./WorkoutCreateWithoutExercisesInput.schema";
import { WorkoutUncheckedCreateWithoutExercisesInputObjectSchema } from "./WorkoutUncheckedCreateWithoutExercisesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutUpsertWithoutExercisesInput> = z
    .object({
        update: z.union([
            z.lazy(() => WorkoutUpdateWithoutExercisesInputObjectSchema),
            z.lazy(() => WorkoutUncheckedUpdateWithoutExercisesInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => WorkoutCreateWithoutExercisesInputObjectSchema),
            z.lazy(() => WorkoutUncheckedCreateWithoutExercisesInputObjectSchema),
        ]),
    })
    .strict();

export const WorkoutUpsertWithoutExercisesInputObjectSchema = Schema;
