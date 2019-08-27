const productController = require("./controller");
const productDoc = require("../doc/product.doc");

let routes = [
  {
    method: "GET",
    url: "/api/products",
    handler: productController.getProducts
    // schema: productDoc.getProductsSchema
  },
  {
    method: "GET",
    url: "/api/products/:id",
    handler: productController.getSingleProduct
    // schema: productDoc.getSingleProductsSchema
  },
  {
    method: "POST",
    url: "/api/products",
    handler: productController.addProduct
    // schema: productDoc.addProductSchema
  },
  {
    method: "PUT",
    url: "/api/products/:id",
    handler: productController.updateProduct
    // schema: productDoc.updateProductSchema
  },
  {
    method: "DELETE",
    url: "/api/products/:id",
    handler: productController.deleteProduct
    // schema: productDoc.deleteProductSchema
  }
];

module.exports = routes;
