import Database from "better-sqlite3";
import Fastify from "fastify";
import { createExperimentModel } from "./src/experiment.js";

const isDev = process.env.NODE_ENV !== "production";
const devLogger = {
  level: "debug",
  transport: {
    target: "pino-pretty",
    options: {
      ignore: "pid,hostname",
      translateTime: "HH:MM:ss Z",
      singleLine: true,
    },
  },
};
const fastify = Fastify({
  logger: isDev ? devLogger : true,
});

const db = new Database("do-experiments.db");

fastify.get("/api/experiments", async function getExperiments(_, res) {
  const experiments = db
    .prepare("SELECT id, name, description, created_at FROM experiments")
    .all();

  res.send(experiments);
});

fastify.post("/api/experiment", async function createExperiment(req, res) {
  try {
    const data = req.body;
    return createExperimentModel(data, res, db);
  } catch (err) {
    fastify.log.error(err);
    if (err && err.code === "SQLITE_CONSTRAINT") {
      return res.code(409).send({ error: "Database constraint violation" });
    }
    return res.code(500).send({ error: "Internal Server Error" });
  }
});

// Run the server!
try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
