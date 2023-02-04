import * as z from "zod"
import { CompleteExercise, RelatedExerciseModel } from "./index"

export const WorkoutModel = z.object({
  id: z.string(),
  title: z.string(),
  lastPreformed: z.string(),
  created_at: z.date().nullish(),
  updated_at: z.date().nullish(),
})

export interface CompleteWorkout extends z.infer<typeof WorkoutModel> {
  exercises: CompleteExercise[]
}

/**
 * RelatedWorkoutModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedWorkoutModel: z.ZodSchema<CompleteWorkout> = z.lazy(() => WorkoutModel.extend({
  exercises: RelatedExerciseModel.array(),
}))
