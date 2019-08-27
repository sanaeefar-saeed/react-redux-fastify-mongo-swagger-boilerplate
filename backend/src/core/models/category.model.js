// External Dependencies
const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoryName: String,
  parentId: String,
  isRootCategory: Boolean,
  isVisible: Boolean,
  images: Object
});

module.exports = mongoose.model("Category", categorySchema);
