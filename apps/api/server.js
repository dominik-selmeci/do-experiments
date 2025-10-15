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

// Declare a route
fastify.get("/", async function handler(request, reply) {
  return { hello: "world" };
});

// Run the server!
try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
