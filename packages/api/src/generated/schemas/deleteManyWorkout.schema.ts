import { z } from 'zod';
import { WorkoutWhereInputObjectSchema } from './objects/WorkoutWhereInput.schema';

export const WorkoutDeleteManySchema = z.object({
  where: WorkoutWhereInputObjectSchema.optional(),
});
