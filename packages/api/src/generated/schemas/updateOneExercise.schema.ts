import { z } from 'zod';
import { ExerciseSelectObjectSchema } from './objects/ExerciseSelect.schema';
import { ExerciseIncludeObjectSchema } from './objects/ExerciseInclude.schema';
import { ExerciseUpdateInputObjectSchema } from './objects/ExerciseUpdateInput.schema';
import { ExerciseUncheckedUpdateInputObjectSchema } from './objects/ExerciseUncheckedUpdateInput.schema';
import { ExerciseWhereUniqueInputObjectSchema } from './objects/ExerciseWhereUniqueInput.schema';

export const ExerciseUpdateOneSchema = z.object({
  select: ExerciseSelectObjectSchema.optional(),
  include: ExerciseIncludeObjectSchema.optional(),
  data: z.union([
    ExerciseUpdateInputObjectSchema,
    ExerciseUncheckedUpdateInputObjectSchema,
  ]),
  where: ExerciseWhereUniqueInputObjectSchema,
});
