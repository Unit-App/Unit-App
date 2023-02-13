import { z } from "zod";
import { ExerciseScalarWhereInputObjectSchema } from "./ExerciseScalarWhereInput.schema";
import { ExerciseUpdateManyMutationInputObjectSchema } from "./ExerciseUpdateManyMutationInput.schema";
import { ExerciseUncheckedUpdateManyWithoutExercisesInputObjectSchema } from "./ExerciseUncheckedUpdateManyWithoutExercisesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExerciseUpdateManyWithWhereWithoutWorkoutInput> = z
    .object({
        where: z.lazy(() => ExerciseScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => ExerciseUpdateManyMutationInputObjectSchema),
            z.lazy(() => ExerciseUncheckedUpdateManyWithoutExercisesInputObjectSchema),
        ]),
    })
    .strict();

export const ExerciseUpdateManyWithWhereWithoutWorkoutInputObjectSchema = Schema;
