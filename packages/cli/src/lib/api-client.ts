import { hc } from "hono/client";
import type { AppType } from "@operator/server";

export const apiClient = hc<AppType>(
  process.env.API_URL ?? "http://localhost:3000",
);
