import { z } from 'zod';
import { WorkoutSelectObjectSchema } from './objects/WorkoutSelect.schema';
import { WorkoutIncludeObjectSchema } from './objects/WorkoutInclude.schema';
import { WorkoutWhereUniqueInputObjectSchema } from './objects/WorkoutWhereUniqueInput.schema';
import { WorkoutCreateInputObjectSchema } from './objects/WorkoutCreateInput.schema';
import { WorkoutUncheckedCreateInputObjectSchema } from './objects/WorkoutUncheckedCreateInput.schema';
import { WorkoutUpdateInputObjectSchema } from './objects/WorkoutUpdateInput.schema';
import { WorkoutUncheckedUpdateInputObjectSchema } from './objects/WorkoutUncheckedUpdateInput.schema';

export const WorkoutUpsertSchema = z.object({
  select: WorkoutSelectObjectSchema.optional(),
  include: WorkoutIncludeObjectSchema.optional(),
  where: WorkoutWhereUniqueInputObjectSchema,
  create: z.union([
    WorkoutCreateInputObjectSchema,
    WorkoutUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    WorkoutUpdateInputObjectSchema,
    WorkoutUncheckedUpdateInputObjectSchema,
  ]),
});
