import { t, shieldedProcedure } from "../../trpc";
import { WorkoutFindUniqueSchema } from "../schemas/findUniqueWorkout.schema";
import { WorkoutFindFirstSchema } from "../schemas/findFirstWorkout.schema";
import { WorkoutFindManySchema } from "../schemas/findManyWorkout.schema";
import { WorkoutCreateOneSchema } from "../schemas/createOneWorkout.schema";
import { WorkoutCreateManySchema } from "../schemas/createManyWorkout.schema";
import { WorkoutDeleteOneSchema } from "../schemas/deleteOneWorkout.schema";
import { WorkoutUpdateOneSchema } from "../schemas/updateOneWorkout.schema";
import { WorkoutDeleteManySchema } from "../schemas/deleteManyWorkout.schema";
import { WorkoutUpdateManySchema } from "../schemas/updateManyWorkout.schema";
import { WorkoutUpsertSchema } from "../schemas/upsertOneWorkout.schema";
import { WorkoutAggregateSchema } from "../schemas/aggregateWorkout.schema";
import { WorkoutGroupBySchema } from "../schemas/groupByWorkout.schema";

export const workoutsRouter = t.router({
  aggregateWorkout: shieldedProcedure
    .input(WorkoutAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateWorkout = await ctx.prisma.workout.aggregate(input);
      return aggregateWorkout;
    }),
  createManyWorkout: shieldedProcedure
    .input(WorkoutCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyWorkout = await ctx.prisma.workout.createMany(input);
      return createManyWorkout;
    }),
  createOneWorkout: shieldedProcedure
    .input(WorkoutCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneWorkout = await ctx.prisma.workout.create(input);
      return createOneWorkout;
    }),
  deleteManyWorkout: shieldedProcedure
    .input(WorkoutDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyWorkout = await ctx.prisma.workout.deleteMany(input);
      return deleteManyWorkout;
    }),
  deleteOneWorkout: shieldedProcedure
    .input(WorkoutDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneWorkout = await ctx.prisma.workout.delete(input);
      return deleteOneWorkout;
    }),
  findFirstWorkout: shieldedProcedure
    .input(WorkoutFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstWorkout = await ctx.prisma.workout.findFirst(input);
      return findFirstWorkout;
    }),
  findFirstWorkoutOrThrow: shieldedProcedure
    .input(WorkoutFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstWorkoutOrThrow = await ctx.prisma.workout.findFirstOrThrow(input);
      return findFirstWorkoutOrThrow;
    }),
  findManyWorkout: shieldedProcedure
    .input(WorkoutFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyWorkout = await ctx.prisma.workout.findMany(input);
      return findManyWorkout;
    }),
  findUniqueWorkout: shieldedProcedure
    .input(WorkoutFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueWorkout = await ctx.prisma.workout.findUnique(input);
      return findUniqueWorkout;
    }),
  findUniqueWorkoutOrThrow: shieldedProcedure
    .input(WorkoutFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueWorkoutOrThrow = await ctx.prisma.workout.findUniqueOrThrow(input);
      return findUniqueWorkoutOrThrow;
    }),
  groupByWorkout: shieldedProcedure
    .input(WorkoutGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByWorkout = await ctx.prisma.workout.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByWorkout;
    }),
  updateManyWorkout: shieldedProcedure
    .input(WorkoutUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyWorkout = await ctx.prisma.workout.updateMany(input);
      return updateManyWorkout;
    }),
  updateOneWorkout: shieldedProcedure
    .input(WorkoutUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneWorkout = await ctx.prisma.workout.update(input);
      return updateOneWorkout;
    }),
  upsertOneWorkout: shieldedProcedure
    .input(WorkoutUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneWorkout = await ctx.prisma.workout.upsert(input);
      return upsertOneWorkout;
    }),

})
