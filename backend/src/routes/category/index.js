// Import our Controllers
const categoryController = require("./controller");
// Import Swagger doc
const categoryDoc = require("../doc/category.doc");
let a = (request, reply, done) => {
  reply.status(403).send();
  done();
};
let routes = [
  {
    // beforeHandler: [a],
    method: "GET",
    url: "/api/categories",
    handler: categoryController.getCategories
    // schema: categoryDoc.getCategoriesSchema
  },
  {
    method: "GET",
    url: "/api/categories/:id",
    handler: categoryController.getSingleCategory
    // schema: categoryDoc.getSingleCategoriesSchema
  },
  {
    method: "POST",
    url: "/api/categories",
    handler: categoryController.addCategory
    // schema: categoryDoc.addCategorySchema
  },
  {
    method: "PUT",
    url: "/api/categories/:id",
    handler: categoryController.updateCategory
    // schema: categoryDoc.updateCategorySchema
  },
  {
    method: "DELETE",
    url: "/api/categories/:id",
    handler: categoryController.deleteCategory
    // schema: categoryDoc.deleteCategorySchema
  }
];

module.exports = routes;
