import { z } from "zod";
import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema";
import { IntWithAggregatesFilterObjectSchema } from "./IntWithAggregatesFilter.schema";
import { DateTimeNullableWithAggregatesFilterObjectSchema } from "./DateTimeNullableWithAggregatesFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExerciseScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => ExerciseScalarWhereWithAggregatesInputObjectSchema),
                z.lazy(() => ExerciseScalarWhereWithAggregatesInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => ExerciseScalarWhereWithAggregatesInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => ExerciseScalarWhereWithAggregatesInputObjectSchema),
                z.lazy(() => ExerciseScalarWhereWithAggregatesInputObjectSchema).array(),
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
        name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
        reps: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()]).optional(),
        sets: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()]).optional(),
        created_at: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.date()])
            .optional()
            .nullable(),
        updated_at: z
            .union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.date()])
            .optional()
            .nullable(),
    })
    .strict();

export const ExerciseScalarWhereWithAggregatesInputObjectSchema = Schema;
