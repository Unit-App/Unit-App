import { z } from "zod";
import { WorkoutSelectObjectSchema } from "./WorkoutSelect.schema";
import { WorkoutIncludeObjectSchema } from "./WorkoutInclude.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutArgs> = z
    .object({
        select: z.lazy(() => WorkoutSelectObjectSchema).optional(),
        include: z.lazy(() => WorkoutIncludeObjectSchema).optional(),
    })
    .strict();

export const WorkoutArgsObjectSchema = Schema;
