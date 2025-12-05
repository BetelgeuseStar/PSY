import type { User } from "../index.ts";

export type SafeUser = Pick<User, "id" | "login">;
