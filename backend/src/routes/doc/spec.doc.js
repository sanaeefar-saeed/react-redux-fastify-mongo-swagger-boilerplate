exports.getSpecsSchema = {
  description: "Show all Specs",
  tags: ["specs"],
  summary: "Show all Specs",
  response: {
    200: {
      description: "Successful response",
      type: "object",
      properties: {
        _id: { type: "string" },
        title: { type: "string" },
        brand: { type: "string" },
        price: { type: "string" },
        age: { type: "number" },
        services: { type: "object" },
        __v: { type: "number" }
      }
    }
  }
};

exports.getSingleSpecsSchema = {
  description: "Show one spec",
  tags: ["specs"],
  summary: "Show one spec",
  response: {
    200: {
      description: "Successful response",
      type: "object",
      properties: {
        _id: { type: "string" },
        title: { type: "string" },
        brand: { type: "string" },
        price: { type: "string" },
        age: { type: "number" },
        services: { type: "object" },
        __v: { type: "number" }
      }
    }
  }
};

exports.addSpecSchema = {
  description: "Create a new spec",
  tags: ["specs"],
  summary: "Creates new spec with given values",
  body: {
    type: "object",
    properties: {
      title: { type: "string" },
      brand: { type: "string" },
      price: { type: "string" },
      age: { type: "number" },
      services: { type: "object" }
    }
  },
  response: {
    200: {
      description: "Successful response",
      type: "object",
      properties: {
        _id: { type: "string" },
        title: { type: "string" },
        brand: { type: "string" },
        price: { type: "string" },
        age: { type: "number" },
        services: { type: "object" },
        __v: { type: "number" }
      }
    }
  }
};

exports.updateSpecSchema = {
  description: "Update a spec",
  tags: ["specs"],
  summary: "Update a spec with given values",
  body: {
    type: "object",
    properties: {
      title: { type: "string" },
      brand: { type: "string" },
      price: { type: "string" },
      age: { type: "number" },
      services: { type: "object" }
    }
  },
  response: {
    200: {
      description: "Successful response",
      type: "object",
      properties: {
        _id: { type: "string" },
        title: { type: "string" },
        brand: { type: "string" },
        price: { type: "string" },
        age: { type: "number" },
        services: { type: "object" },
        __v: { type: "number" }
      }
    }
  }
};

exports.deleteSpecSchema = {
  description: "Delete a spec",
  tags: ["specs"],
  summary: "Delete a spec",
  body: {
    type: "object",
    properties: {
      title: { type: "string" },
      brand: { type: "string" },
      price: { type: "string" },
      age: { type: "number" },
      services: { type: "object" }
    }
  },
  response: {
    200: {
      description: "Successful response",
      type: "object",
      properties: {
        _id: { type: "string" },
        title: { type: "string" },
        brand: { type: "string" },
        price: { type: "string" },
        age: { type: "number" },
        services: { type: "object" },
        __v: { type: "number" }
      }
    }
  }
};
