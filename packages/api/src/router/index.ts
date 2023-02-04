import { router } from "../trpc";
import { workoutRouter } from "./workout";
import { authRouter } from "./auth";

export const appRouter = router({
    workout: workoutRouter,
    auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
