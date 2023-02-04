/* eslint-disable @typescript-eslint/no-unsafe-call */

/* eslint-disable @typescript-eslint/no-unsafe-return */
import { createExerciseHandler, deleteExerciseHandler, getExerciseHandler, getExercisesHandler, updateExerciseHandler } from "../controllers/exercise.controller"
import { createExerciseSchema, filterQuery, params, updateExerciseSchema } from "../schema/exercise.schema"
import { router, protectedProcedure } from "../trpc";

export const exerciseRouter = router({
    create: protectedProcedure.input(createExerciseSchema).mutation(({ input, ctx }) => createExerciseHandler({ input, ctx })),
    update: protectedProcedure
        .input(updateExerciseSchema)
        .mutation(({ input }) => updateExerciseHandler({ paramsInput: input.params, input: input.body })),
    delete: protectedProcedure.input(params).mutation(({ input }) => deleteExerciseHandler({ paramsInput: input })),
    byId: protectedProcedure.input(params).query(({ input }) => getExerciseHandler({ paramsInput: input })),
    all: protectedProcedure.input(filterQuery).query(({ input }) => getExercisesHandler({ filterQuery: input })),
});
