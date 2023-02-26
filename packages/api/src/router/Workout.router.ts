import { t, shieldedProcedure } from "../trpc";
import { WorkoutFindManySchema } from "../generated/schemas/findManyWorkout.schema";
import {
    createManyWorkoutHandler,
    createWorkoutHandler,
    deleteManyWorkoutHandler,
    deleteWorkoutHandler,
    getWorkoutHandler,
    getWorkoutsHandler,
    updateManyWorkoutHandler,
    updateWorkoutHandler,
} from "../controllers/workout.controller";
import {
    WorkoutCreateInputObjectSchema,
    WorkoutCreateManyInputObjectSchema,
    WorkoutUncheckedUpdateInputObjectSchema,
    WorkoutUpdateManyMutationInputObjectSchema,
    WorkoutWhereInputObjectSchema,
    WorkoutWhereUniqueInputObjectSchema,
} from "../generated/schemas";

export const workoutsRouter = t.router({
    createManyWorkout: shieldedProcedure
        .input(WorkoutCreateManyInputObjectSchema)
        .mutation(async ({ input, ctx }) => await createManyWorkoutHandler({ input, ctx })),
    createOneWorkout: shieldedProcedure
        .input(WorkoutCreateInputObjectSchema)
        .mutation(async ({ input, ctx }) => await createWorkoutHandler({ input, ctx })),
    deleteManyWorkout: shieldedProcedure
        .input(WorkoutWhereInputObjectSchema)
        .mutation(async ({ ctx, input }) => await deleteManyWorkoutHandler({ input, ctx })),
    deleteOneWorkout: shieldedProcedure
        .input(WorkoutWhereUniqueInputObjectSchema)
        .mutation(async ({ ctx, input }) => await deleteWorkoutHandler({ input, ctx })),
    findManyWorkout: shieldedProcedure
        .input(WorkoutFindManySchema)
        .query(async ({ ctx, input }) => await getWorkoutsHandler({ input, ctx })),
    findUniqueWorkoutOrThrow: shieldedProcedure
        .input(WorkoutWhereUniqueInputObjectSchema)
        .query(async ({ ctx, input }) => await getWorkoutHandler({ input, ctx })),
    updateManyWorkout: shieldedProcedure
        .input(WorkoutUpdateManyMutationInputObjectSchema)
        .mutation(async ({ ctx, input }) => await updateManyWorkoutHandler({ input, ctx })),
    updateOneWorkout: shieldedProcedure
        .input(WorkoutUncheckedUpdateInputObjectSchema)
        .mutation(async ({ ctx, input }) => await updateWorkoutHandler({ input, ctx })),
});
