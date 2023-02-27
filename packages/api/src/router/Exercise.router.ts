import { t, shieldedProcedure } from "../trpc";
import { ExerciseFindUniqueSchema } from "../generated/schemas/findUniqueExercise.schema";
import { ExerciseFindFirstSchema } from "../generated/schemas/findFirstExercise.schema";
import { ExerciseFindManySchema } from "../generated/schemas/findManyExercise.schema";
import { ExerciseCreateOneSchema } from "../generated/schemas/createOneExercise.schema";
import { ExerciseCreateManySchema } from "../generated/schemas/createManyExercise.schema";
import { ExerciseDeleteOneSchema } from "../generated/schemas/deleteOneExercise.schema";
import { ExerciseUpdateOneSchema } from "../generated/schemas/updateOneExercise.schema";
import { ExerciseDeleteManySchema } from "../generated/schemas/deleteManyExercise.schema";
import { ExerciseUpdateManySchema } from "../generated/schemas/updateManyExercise.schema";
import { ExerciseUpsertSchema } from "../generated/schemas/upsertOneExercise.schema";
import { ExerciseAggregateSchema } from "../generated/schemas/aggregateExercise.schema";
import { ExerciseGroupBySchema } from "../generated/schemas/groupByExercise.schema";

export const exercisesRouter = t.router({
  aggregateExercise: shieldedProcedure
    .input(ExerciseAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateExercise = await ctx.prisma.exercise.aggregate(input);
      return aggregateExercise;
    }),
  createManyExercise: shieldedProcedure
    .input(ExerciseCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyExercise = await ctx.prisma.exercise.createMany(input);
      return createManyExercise;
    }),
  createOneExercise: shieldedProcedure
    .input(ExerciseCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneExercise = await ctx.prisma.exercise.create(input);
      return createOneExercise;
    }),
  deleteManyExercise: shieldedProcedure
    .input(ExerciseDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyExercise = await ctx.prisma.exercise.deleteMany(input);
      return deleteManyExercise;
    }),
  deleteOneExercise: shieldedProcedure
    .input(ExerciseDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneExercise = await ctx.prisma.exercise.delete(input);
      return deleteOneExercise;
    }),
  findFirstExercise: shieldedProcedure
    .input(ExerciseFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstExercise = await ctx.prisma.exercise.findFirst(input);
      return findFirstExercise;
    }),
  findFirstExerciseOrThrow: shieldedProcedure
    .input(ExerciseFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstExerciseOrThrow = await ctx.prisma.exercise.findFirstOrThrow(input);
      return findFirstExerciseOrThrow;
    }),
  findManyExercise: shieldedProcedure
    .input(ExerciseFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyExercise = await ctx.prisma.exercise.findMany(input);
      return findManyExercise;
    }),
  findUniqueExercise: shieldedProcedure
    .input(ExerciseFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueExercise = await ctx.prisma.exercise.findUnique(input);
      return findUniqueExercise;
    }),
  findUniqueExerciseOrThrow: shieldedProcedure
    .input(ExerciseFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueExerciseOrThrow = await ctx.prisma.exercise.findUniqueOrThrow(input);
      return findUniqueExerciseOrThrow;
    }),
  groupByExercise: shieldedProcedure
    .input(ExerciseGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByExercise = await ctx.prisma.exercise.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByExercise;
    }),
  updateManyExercise: shieldedProcedure
    .input(ExerciseUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyExercise = await ctx.prisma.exercise.updateMany(input);
      return updateManyExercise;
    }),
  updateOneExercise: shieldedProcedure
    .input(ExerciseUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneExercise = await ctx.prisma.exercise.update(input);
      return updateOneExercise;
    }),
  upsertOneExercise: shieldedProcedure
    .input(ExerciseUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneExercise = await ctx.prisma.exercise.upsert(input);
      return upsertOneExercise;
    }),

})
