let routes = [];

routes = routes.concat(require("./product/index"));
routes = routes.concat(require("./category/index"));
routes = routes.concat(require("./spec/index"));

module.exports = routes;
