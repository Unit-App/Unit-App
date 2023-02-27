import { expect, test } from "@playwright/test";
import { appRouter } from "../../../api/src/router";
import { createContextInner } from "../../../api/src/context";
import { type RouterInputs } from "../../../../apps/web/src/utils/trpc";

test("unauthed user should not be possible to create a workout", async () => {
    const ctx = await createContextInner({ user: null });
    const caller = appRouter.createCaller(ctx);

    const input: RouterInputs["workout"]["createOneWorkout"] = {
        title: (Math.random() + 1).toString(36).substring(7),
        lastPreformed: (Math.random() + 1).toString(36).substring(7),
    };

    await expect(caller.workout.createOneWorkout(input)).rejects.toThrowError();
});

test("workout should be get-able after created", async () => {
    const ctx = await createContextInner({ user: null });
    const caller = appRouter.createCaller(ctx);

    const input: RouterInputs["workout"]["createOneWorkout"] = {
        title: (Math.random() + 1).toString(36).substring(7),
        lastPreformed: (Math.random() + 1).toString(36).substring(7),
        // exercises: {
        //     ttestle: "hello test",
        //     lastPreformed: (Math.random() + 1).toString(36).substring(7),
        //     sets: {
        //         ttestle: "hello test",
        //         lastPreformed: (Math.random() + 1).toString(36).substring(7),
        //         reps: {
        //             ttestle: "hello test",
        //             lastPreformed: (Math.random() + 1).toString(36).substring(7),
        //             weight: 100,
        //             reps: 10,
        //         },
        //     },
        // },
    };

    const workout = await caller.workout.createOneWorkout(input);
    const byId = await caller.workout.findUniqueWorkoutOrThrow({ id: workout.data.workout.id });

    expect(byId).toMatchObject(input);
});
