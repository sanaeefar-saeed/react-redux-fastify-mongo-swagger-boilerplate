// Require the fastify framework and instantiate it
const fastify = require("fastify")({
  logger: true,
  bodyLimit: 52428800
});

// enable CORS
fastify.register(require("fastify-cors"));

// Require external modules
const mongoose = require("mongoose");

// Import Routes
const routes = require("./routes");

// fastify.register(require("fastify-jwt"), {
//   secret: "supersecret"
// });

// fastify.addHook("onRequest", async (request, reply, done) => {
//   try {
//     await request.jwtVerify();
//   } catch (err) {
//     done();
//   }
// });

// Import Swagger Options
const swagger = require("./config/swagger");

// Register Swagger
fastify.register(require("fastify-swagger"), swagger.options);

// Connect to DB
mongoose
  .connect("mongodb://localhost/ebgadmin")
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

routes.forEach(route => {
  fastify.route(route);
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(4000);
    fastify.swagger();
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
