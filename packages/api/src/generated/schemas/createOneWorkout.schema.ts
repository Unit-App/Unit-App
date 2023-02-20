import { z } from 'zod';
import { WorkoutSelectObjectSchema } from './objects/WorkoutSelect.schema';
import { WorkoutIncludeObjectSchema } from './objects/WorkoutInclude.schema';
import { WorkoutCreateInputObjectSchema } from './objects/WorkoutCreateInput.schema';
import { WorkoutUncheckedCreateInputObjectSchema } from './objects/WorkoutUncheckedCreateInput.schema';

export const WorkoutCreateOneSchema = z.object({
  select: WorkoutSelectObjectSchema.optional(),
  include: WorkoutIncludeObjectSchema.optional(),
  data: WorkoutCreateInputObjectSchema,
    
});
