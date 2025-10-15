import Database from "better-sqlite3";
import Fastify from "fastify";

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

// Run the server!
try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
