exports.getCategoriesSchema = {
  description: 'Show all Categories',
  tags: ['categories'],
  summary: 'Show all Categories',
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


exports.getSingleCategoriesSchema = {
  description: 'Show one category',
  tags: ['categories'],
  summary: 'Show one category',
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


exports.addCategorySchema = {
  description: 'Create a new category',
  tags: ['categories'],
  summary: 'Creates new category with given values',
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


exports.updateCategorySchema = {
  description: 'Update a category',
  tags: ['categories'],
  summary: 'Update a category with given values',
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


exports.deleteCategorySchema = {
  description: 'Delete a category',
  tags: ['categories'],
  summary: 'Delete a category',
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

