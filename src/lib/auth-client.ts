
import { createAuthClient } from "better-auth/react";
const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL as string,
});

export const { signIn, signOut, signUp, useSession } = authClient;
