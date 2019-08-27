exports.getProductsSchema = {
  description: 'Show all Products',
  tags: ['products'],
  summary: 'Show all Products',
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: {type: 'string'},
        title: {type: 'string'},
        brand: {type: 'string'},
        price: {type: 'string'},
        age: {type: 'number'},
        services: {type: 'object'},
        __v: {type: 'number'}
      }
    }
  }
};


exports.getSingleProductsSchema = {
  description: 'Show one product',
  tags: ['products'],
  summary: 'Show one product',
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: {type: 'string'},
        title: {type: 'string'},
        brand: {type: 'string'},
        price: {type: 'string'},
        age: {type: 'number'},
        services: {type: 'object'},
        __v: {type: 'number'}
      }
    }
  }
};


exports.addProductSchema = {
  description: 'Create a new product',
  tags: ['products'],
  summary: 'Creates new product with given values',
  body: {
    type: 'object',
    properties: {
      title: {type: 'string'},
      brand: {type: 'string'},
      price: {type: 'string'},
      age: {type: 'number'},
      services: {type: 'object'}
    }
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: {type: 'string'},
        title: {type: 'string'},
        brand: {type: 'string'},
        price: {type: 'string'},
        age: {type: 'number'},
        services: {type: 'object'},
        __v: {type: 'number'}
      }
    }
  }
};


exports.updateProductSchema = {
  description: 'Update a product',
  tags: ['products'],
  summary: 'Update a product with given values',
  body: {
    type: 'object',
    properties: {
      title: {type: 'string'},
      brand: {type: 'string'},
      price: {type: 'string'},
      age: {type: 'number'},
      services: {type: 'object'}
    }
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: {type: 'string'},
        title: {type: 'string'},
        brand: {type: 'string'},
        price: {type: 'string'},
        age: {type: 'number'},
        services: {type: 'object'},
        __v: {type: 'number'}
      }
    }
  }
};


exports.deleteProductSchema = {
  description: 'Delete a product',
  tags: ['products'],
  summary: 'Delete a product',
  body: {
    type: 'object',
    properties: {
      title: {type: 'string'},
      brand: {type: 'string'},
      price: {type: 'string'},
      age: {type: 'number'},
      services: {type: 'object'}
    }
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        _id: {type: 'string'},
        title: {type: 'string'},
        brand: {type: 'string'},
        price: {type: 'string'},
        age: {type: 'number'},
        services: {type: 'object'},
        __v: {type: 'number'}
      }
    }
  }
};

