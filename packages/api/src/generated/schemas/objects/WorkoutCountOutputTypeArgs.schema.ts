import { z } from "zod";
import { WorkoutCountOutputTypeSelectObjectSchema } from "./WorkoutCountOutputTypeSelect.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.WorkoutCountOutputTypeArgs> = z
    .object({
        select: z.lazy(() => WorkoutCountOutputTypeSelectObjectSchema).optional(),
    })
    .strict();

export const WorkoutCountOutputTypeArgsObjectSchema = Schema;
