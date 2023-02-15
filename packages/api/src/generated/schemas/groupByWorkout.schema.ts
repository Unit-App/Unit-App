import { z } from "zod";
import { WorkoutWhereInputObjectSchema } from "./objects/WorkoutWhereInput.schema";
import { WorkoutOrderByWithAggregationInputObjectSchema } from "./objects/WorkoutOrderByWithAggregationInput.schema";
import { WorkoutScalarWhereWithAggregatesInputObjectSchema } from "./objects/WorkoutScalarWhereWithAggregatesInput.schema";
import { WorkoutScalarFieldEnumSchema } from "./enums/WorkoutScalarFieldEnum.schema";

export const WorkoutGroupBySchema = z.object({
    where: WorkoutWhereInputObjectSchema.optional(),
    orderBy: z
        .union([WorkoutOrderByWithAggregationInputObjectSchema, WorkoutOrderByWithAggregationInputObjectSchema.array()])
        .optional(),
    having: WorkoutScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    by: z.array(WorkoutScalarFieldEnumSchema),
});
