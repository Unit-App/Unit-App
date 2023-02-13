import { z } from "zod";
import { ExerciseSelectObjectSchema } from "./objects/ExerciseSelect.schema";
import { ExerciseIncludeObjectSchema } from "./objects/ExerciseInclude.schema";
import { ExerciseWhereUniqueInputObjectSchema } from "./objects/ExerciseWhereUniqueInput.schema";
import { ExerciseCreateInputObjectSchema } from "./objects/ExerciseCreateInput.schema";
import { ExerciseUncheckedCreateInputObjectSchema } from "./objects/ExerciseUncheckedCreateInput.schema";
import { ExerciseUpdateInputObjectSchema } from "./objects/ExerciseUpdateInput.schema";
import { ExerciseUncheckedUpdateInputObjectSchema } from "./objects/ExerciseUncheckedUpdateInput.schema";

export const ExerciseUpsertSchema = z.object({
    select: ExerciseSelectObjectSchema.optional(),
    include: ExerciseIncludeObjectSchema.optional(),
    where: ExerciseWhereUniqueInputObjectSchema,
    create: z.union([ExerciseCreateInputObjectSchema, ExerciseUncheckedCreateInputObjectSchema]),
    update: z.union([ExerciseUpdateInputObjectSchema, ExerciseUncheckedUpdateInputObjectSchema]),
});
