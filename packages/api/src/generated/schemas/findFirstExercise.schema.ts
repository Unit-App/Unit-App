import { z } from "zod";
import { ExerciseSelectObjectSchema } from "./objects/ExerciseSelect.schema";
import { ExerciseIncludeObjectSchema } from "./objects/ExerciseInclude.schema";
import { ExerciseOrderByWithRelationInputObjectSchema } from "./objects/ExerciseOrderByWithRelationInput.schema";
import { ExerciseWhereInputObjectSchema } from "./objects/ExerciseWhereInput.schema";
import { ExerciseWhereUniqueInputObjectSchema } from "./objects/ExerciseWhereUniqueInput.schema";
import { ExerciseScalarFieldEnumSchema } from "./enums/ExerciseScalarFieldEnum.schema";

export const ExerciseFindFirstSchema = z.object({
    select: ExerciseSelectObjectSchema.optional(),
    include: ExerciseIncludeObjectSchema.optional(),
    orderBy: z
        .union([ExerciseOrderByWithRelationInputObjectSchema, ExerciseOrderByWithRelationInputObjectSchema.array()])
        .optional(),
    where: ExerciseWhereInputObjectSchema.optional(),
    cursor: ExerciseWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(ExerciseScalarFieldEnumSchema).optional(),
});
