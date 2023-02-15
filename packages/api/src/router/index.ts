import { workoutsRouter } from "./Workout.router";
import { exercisesRouter } from "./Exercise.router";

import { router } from "../trpc";
import { authRouter } from "./auth";
export const appRouter = router({
  workout: workoutsRouter,
  exercise: exercisesRouter, auth: authRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
