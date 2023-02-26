import { z } from "zod";
import { WorkoutSelectObjectSchema } from "./objects/WorkoutSelect.schema";
import { WorkoutIncludeObjectSchema } from "./objects/WorkoutInclude.schema";
import { WorkoutUpdateInputObjectSchema } from "./objects/WorkoutUpdateInput.schema";
import { WorkoutUncheckedUpdateInputObjectSchema } from "./objects/WorkoutUncheckedUpdateInput.schema";
import { WorkoutWhereUniqueInputObjectSchema } from "./objects/WorkoutWhereUniqueInput.schema";

export const WorkoutUpdateOneSchema = z.object({
    select: WorkoutSelectObjectSchema.optional(),
    include: WorkoutIncludeObjectSchema.optional(),
    data: z.union([WorkoutUpdateInputObjectSchema, WorkoutUncheckedUpdateInputObjectSchema]),
    where: WorkoutWhereUniqueInputObjectSchema,
});
