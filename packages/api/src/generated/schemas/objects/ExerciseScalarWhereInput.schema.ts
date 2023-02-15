import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { IntFilterObjectSchema } from "./IntFilter.schema";
import { DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.ExerciseScalarWhereInput> = z
    .object({
        AND: z
            .union([
                z.lazy(() => ExerciseScalarWhereInputObjectSchema),
                z.lazy(() => ExerciseScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
        OR: z
            .lazy(() => ExerciseScalarWhereInputObjectSchema)
            .array()
            .optional(),
        NOT: z
            .union([
                z.lazy(() => ExerciseScalarWhereInputObjectSchema),
                z.lazy(() => ExerciseScalarWhereInputObjectSchema).array(),
            ])
            .optional(),
        id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
        reps: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
        sets: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
        created_at: z
            .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
            .optional()
            .nullable(),
        updated_at: z
            .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
            .optional()
            .nullable(),
    })
    .strict();

export const ExerciseScalarWhereInputObjectSchema = Schema;
