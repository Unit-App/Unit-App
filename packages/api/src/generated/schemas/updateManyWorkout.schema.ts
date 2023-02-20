import { z } from 'zod';
import { WorkoutUpdateManyMutationInputObjectSchema } from './objects/WorkoutUpdateManyMutationInput.schema';
import { WorkoutWhereInputObjectSchema } from './objects/WorkoutWhereInput.schema';

export const WorkoutUpdateManySchema = z.object({
  data: WorkoutUpdateManyMutationInputObjectSchema,
  where: WorkoutWhereInputObjectSchema.optional(),
});
