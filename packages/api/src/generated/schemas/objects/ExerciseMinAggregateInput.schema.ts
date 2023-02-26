import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExerciseMinAggregateInputType> = z
    .object({
        id: z.literal(true).optional(),
        name: z.literal(true).optional(),
        reps: z.literal(true).optional(),
        sets: z.literal(true).optional(),
        created_at: z.literal(true).optional(),
        updated_at: z.literal(true).optional(),
    })
    .strict();

export const ExerciseMinAggregateInputObjectSchema = Schema;
