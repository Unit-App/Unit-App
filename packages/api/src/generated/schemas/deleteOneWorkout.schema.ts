import { z } from 'zod';
import { WorkoutSelectObjectSchema } from './objects/WorkoutSelect.schema';
import { WorkoutIncludeObjectSchema } from './objects/WorkoutInclude.schema';
import { WorkoutWhereUniqueInputObjectSchema } from './objects/WorkoutWhereUniqueInput.schema';

export const WorkoutDeleteOneSchema = z.object({
  select: WorkoutSelectObjectSchema.optional(),
  include: WorkoutIncludeObjectSchema.optional(),
  where: WorkoutWhereUniqueInputObjectSchema,
});
