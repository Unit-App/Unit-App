import * as z from "zod"
import { CompleteWorkout, RelatedWorkoutModel } from "./index"

export const ExerciseModel = z.object({
  id: z.string(),
  name: z.string(),
  reps: z.number().int(),
  sets: z.number().int(),
  created_at: z.date().nullish(),
  updated_at: z.date().nullish(),
})

export interface CompleteExercise extends z.infer<typeof ExerciseModel> {
  workout?: CompleteWorkout | null
}

/**
 * RelatedExerciseModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedExerciseModel: z.ZodSchema<CompleteExercise> = z.lazy(() => ExerciseModel.extend({
  workout: RelatedWorkoutModel.nullish(),
}))
