import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { ExerciseUpdateManyWithoutWorkoutNestedInputObjectSchema } from "./ExerciseUpdateManyWithoutWorkoutNestedInput.schema";
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutUpdateInput> = z
    .object({
        id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        lastPreformed: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
        exercises: z.lazy(() => ExerciseUpdateManyWithoutWorkoutNestedInputObjectSchema).optional(),
        created_at: z
            .union([z.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)])
            .optional()
            .nullable(),
        updated_at: z
            .union([z.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)])
            .optional()
            .nullable(),
    })
    .strict();

export const WorkoutUpdateInputObjectSchema = Schema;
