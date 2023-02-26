import { z } from "zod";

export const WorkoutScalarFieldEnumSchema = z.enum(["id", "title", "lastPreformed", "created_at", "updated_at"]);
