import { getToken as getTokenNextjs } from "@convex-dev/better-auth/nextjs";
import { createAuth } from "@next-mono/backend/convex/auth";

export const getToken = () => getTokenNextjs(createAuth);
