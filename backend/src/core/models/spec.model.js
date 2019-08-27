// External Dependencies
const mongoose = require("mongoose");

const specSchema = new mongoose.Schema({
  specName: String,
  specValue: String,
});

module.exports = mongoose.model("Spec", specSchema);
