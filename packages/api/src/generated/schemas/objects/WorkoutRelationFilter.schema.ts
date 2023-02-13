import { z } from "zod";
import { WorkoutWhereInputObjectSchema } from "./WorkoutWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutRelationFilter> = z
    .object({
        is: z
            .lazy(() => WorkoutWhereInputObjectSchema)
            .optional()
            .nullable(),
        isNot: z
            .lazy(() => WorkoutWhereInputObjectSchema)
            .optional()
            .nullable(),
    })
    .strict();

export const WorkoutRelationFilterObjectSchema = Schema;
