import { z } from 'zod';
import { WorkoutSelectObjectSchema } from './objects/WorkoutSelect.schema';
import { WorkoutIncludeObjectSchema } from './objects/WorkoutInclude.schema';
import { WorkoutOrderByWithRelationInputObjectSchema } from './objects/WorkoutOrderByWithRelationInput.schema';
import { WorkoutWhereInputObjectSchema } from './objects/WorkoutWhereInput.schema';
import { WorkoutWhereUniqueInputObjectSchema } from './objects/WorkoutWhereUniqueInput.schema';
import { WorkoutScalarFieldEnumSchema } from './enums/WorkoutScalarFieldEnum.schema';

export const WorkoutFindManySchema = z.object({
  select: z.lazy(() => WorkoutSelectObjectSchema.optional()),
  include: z.lazy(() => WorkoutIncludeObjectSchema.optional()),
  orderBy: z
    .union([
      WorkoutOrderByWithRelationInputObjectSchema,
      WorkoutOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: WorkoutWhereInputObjectSchema.optional(),
  cursor: WorkoutWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(WorkoutScalarFieldEnumSchema).optional(),
});
