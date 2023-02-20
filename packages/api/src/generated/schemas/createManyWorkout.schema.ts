import { z } from 'zod';
import { WorkoutCreateManyInputObjectSchema } from './objects/WorkoutCreateManyInput.schema';

export const WorkoutCreateManySchema = z.object({
  data: z.union([
    WorkoutCreateManyInputObjectSchema,
    z.array(WorkoutCreateManyInputObjectSchema),
  ]),
});
