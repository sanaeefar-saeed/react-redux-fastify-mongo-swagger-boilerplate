// Import our Controllers
const specController = require("./controller");
// Import Swagger doc
const specDoc = require("../doc/spec.doc");
let a = (request, reply, done) => {
  reply.status(403).send();
  done();
};
let routes = [
  {
    // beforeHandler: [a],
    method: "GET",
    url: "/api/specs",
    handler: specController.getSpecs
    // schema: specDoc.getSpecsSchema
  },
  {
    method: "GET",
    url: "/api/specs/:id",
    handler: specController.getSingleSpec
    // schema: specDoc.getSingleSpecsSchema
  },
  {
    method: "POST",
    url: "/api/specs",
    handler: specController.addSpec
    // schema: specDoc.addSpecSchema
  },
  {
    method: "PUT",
    url: "/api/specs/:id",
    handler: specController.updateSpec
    // schema: specDoc.updateSpecSchema
  },
  {
    method: "DELETE",
    url: "/api/specs/:id",
    handler: specController.deleteSpec
    // schema: specDoc.deleteSpecSchema
  }
];

module.exports = routes;
