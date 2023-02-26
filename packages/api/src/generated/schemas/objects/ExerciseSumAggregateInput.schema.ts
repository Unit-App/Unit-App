import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExerciseSumAggregateInputType> = z
    .object({
        reps: z.literal(true).optional(),
        sets: z.literal(true).optional(),
    })
    .strict();

export const ExerciseSumAggregateInputObjectSchema = Schema;
