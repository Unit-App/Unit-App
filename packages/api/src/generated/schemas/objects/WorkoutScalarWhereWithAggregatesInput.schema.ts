import { z } from "zod";
import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema";
import { DateTimeNullableWithAggregatesFilterObjectSchema } from "./DateTimeNullableWithAggregatesFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutScalarWhereWithAggregatesInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => WorkoutScalarWhereWithAggregatesInputObjectSchema),
                z.lazy(() => WorkoutScalarWhereWithAggregatesInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => WorkoutScalarWhereWithAggregatesInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => WorkoutScalarWhereWithAggregatesInputObjectSchema),
                z.lazy(() => WorkoutScalarWhereWithAggregatesInputObjectSchema).array(),
            ])
            .optional(),
        id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
        title: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
        lastPreformed: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
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

export const WorkoutScalarWhereWithAggregatesInputObjectSchema = Schema;
