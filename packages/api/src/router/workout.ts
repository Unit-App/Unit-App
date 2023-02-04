/* eslint-disable @typescript-eslint/no-unsafe-call */

/* eslint-disable @typescript-eslint/no-unsafe-return */
import { createWorkoutHandler, deleteWorkoutHandler, getWorkoutHandler, getWorkoutsHandler, updateWorkoutHandler } from "../controllers/workout.controller"
import { createWorkoutSchema, filterQuery, params, updateWorkoutSchema } from "../schema/workout.schema"
import { router, protectedProcedure } from "../trpc";

export const workoutRouter = router({
    create: protectedProcedure.input(createWorkoutSchema).mutation(({ input, ctx }) => createWorkoutHandler({ input, ctx })),
    update: protectedProcedure
        .input(updateWorkoutSchema)
        .mutation(({ input }) => updateWorkoutHandler({ paramsInput: input.params, input: input.body })),
    delete: protectedProcedure.input(params).mutation(({ input }) => deleteWorkoutHandler({ paramsInput: input })),
    byId: protectedProcedure.input(params).query(({ input }) => getWorkoutHandler({ paramsInput: input })),
    all: protectedProcedure.input(filterQuery).query(({ input }) => getWorkoutsHandler({ filterQuery: input })),
});
