// External Dependencies
const boom = require("boom");

// Get Data Models
const Spec = require("../../core/models/spec.model");

// Get all specs
exports.getSpecs = async (req, reply) => {
  try {
    return await Spec.find();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Get single spec by ID
exports.getSingleSpec = async (req, reply) => {
  try {
    const id = req.params.id;
    return await Spec.findById(id);
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Add a new spec
exports.addSpec = async (req, reply) => {
  try {
    const spec = new Spec(req.body);
    return spec.save();
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Update an existing spec
exports.updateSpec = async (req, reply) => {
  try {
    const id = req.params.id;
    const spec = req.body;
    const { ...updateData } = spec;
    return await Spec.findByIdAndUpdate(id, updateData, {
      new: true
    });
  } catch (err) {
    throw boom.boomify(err);
  }
};

// Delete a spec
exports.deleteSpec = async (req, reply) => {
  try {
    const id = req.params.id;
    return await Spec.findByIdAndRemove(id);
  } catch (err) {
    throw boom.boomify(err);
  }
};
