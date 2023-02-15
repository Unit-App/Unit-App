import { z } from "zod";
import { ExerciseSelectObjectSchema } from "./objects/ExerciseSelect.schema";
import { ExerciseIncludeObjectSchema } from "./objects/ExerciseInclude.schema";
import { ExerciseWhereUniqueInputObjectSchema } from "./objects/ExerciseWhereUniqueInput.schema";

export const ExerciseDeleteOneSchema = z.object({
    select: ExerciseSelectObjectSchema.optional(),
    include: ExerciseIncludeObjectSchema.optional(),
    where: ExerciseWhereUniqueInputObjectSchema,
});
