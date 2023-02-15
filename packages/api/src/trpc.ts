import { initTRPC, TRPCError } from "@trpc/server";
import { type Context } from "./context";
import superjson from "superjson";
import { ZodError } from "zod";
import { permissions } from "./shield";

export const t = initTRPC.context<Context>().create({
    transformer: superjson,
    errorFormatter({ shape, error }) {
        return {
            ...shape,
            data: {
                ...shape.data,
                zodError:
                    error.code === "BAD_REQUEST" && error.cause instanceof ZodError ? error.cause.flatten() : null,
            },
        };
    },
});

const isAuthed = t.middleware(({ next, ctx }) => {
    if (!ctx.user) {
        throw new TRPCError({ code: "UNAUTHORIZED", message: "Not authenticated" });
    }
    return next({
        ctx: {
            user: ctx.user,
        },
    });
});

// eslint-disable-next-line require-await
export const globalMiddleware = t.middleware(async ({ next }) => {
    console.log("inside middleware!");
    return next();
});

export const permissionsMiddleware = t.middleware(permissions);
export const shieldedProcedure = t.procedure.use(globalMiddleware).use(permissionsMiddleware);
export const router = t.router;
export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(isAuthed);
