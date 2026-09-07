import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import sessions from "./routes/sessions";

const app = new Hono();

//The reason we are capturing onError is because we want to
//standardize all error messages which are being thrown so that we know how to display them in CLI
app.onError((error, c) => {
  if (error instanceof HTTPException) {
    return c.json(
      {
        error: error.message || "Request failed",
      },
      error.status,
    );
  }

  console.error("Unhandled server errro", error);
  return c.json({ error: "Internal server error" }, 500);
});

const routes = app.route("/sessions", sessions);

export type AppType = typeof routes;

export default {
  port: 3000,
  fetch: app.fetch,
  idleTimeout: 255,
};
