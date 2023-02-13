import { z } from "zod";

export const ExerciseScalarFieldEnumSchema = z.enum(["id", "name", "reps", "sets", "created_at", "updated_at"]);
