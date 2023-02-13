import { shield, allow } from "trpc-shield";
import { Context } from "./context";

export const permissions = shield<Context>({
    query: {
        aggregateExercise: allow,
        aggregateWorkout: allow,
        findFirstExercise: allow,
        findFirstWorkout: allow,
        findManyExercise: allow,
        findManyWorkout: allow,
        findUniqueExercise: allow,
        findUniqueWorkout: allow,
        groupByExercise: allow,
        groupByWorkout: allow,
    },
    mutation: {
        createOneExercise: allow,
        createOneWorkout: allow,
        deleteManyExercise: allow,
        deleteManyWorkout: allow,
        deleteOneExercise: allow,
        deleteOneWorkout: allow,
        updateManyExercise: allow,
        updateManyWorkout: allow,
        updateOneExercise: allow,
        updateOneWorkout: allow,
        upsertOneExercise: allow,
        upsertOneWorkout: allow,
    },
});
