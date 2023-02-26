import { z } from "zod";
import { WorkoutOrderByWithRelationInputObjectSchema } from "./objects/WorkoutOrderByWithRelationInput.schema";
import { WorkoutWhereInputObjectSchema } from "./objects/WorkoutWhereInput.schema";
import { WorkoutWhereUniqueInputObjectSchema } from "./objects/WorkoutWhereUniqueInput.schema";
import { WorkoutCountAggregateInputObjectSchema } from "./objects/WorkoutCountAggregateInput.schema";
import { WorkoutMinAggregateInputObjectSchema } from "./objects/WorkoutMinAggregateInput.schema";
import { WorkoutMaxAggregateInputObjectSchema } from "./objects/WorkoutMaxAggregateInput.schema";

export const WorkoutAggregateSchema = z.object({
    orderBy: z
        .union([WorkoutOrderByWithRelationInputObjectSchema, WorkoutOrderByWithRelationInputObjectSchema.array()])
        .optional(),
    where: WorkoutWhereInputObjectSchema.optional(),
    cursor: WorkoutWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    _count: z.union([z.literal(true), WorkoutCountAggregateInputObjectSchema]).optional(),
    _min: WorkoutMinAggregateInputObjectSchema.optional(),
    _max: WorkoutMaxAggregateInputObjectSchema.optional(),
});
