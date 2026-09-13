import app from "../wloc-worker.js";

export async function onRequest(context) {
  return app.fetch(context.request, context.env, context);
}
