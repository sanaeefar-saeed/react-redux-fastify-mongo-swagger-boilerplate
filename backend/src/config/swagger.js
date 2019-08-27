exports.options = {
  routePrefix: '/doc',
  exposeRoute: true,
  swagger: {
    info: {
      title: 'Admin Panel API',
      description: 'This is the documentation of API Used in Admin Panel ',
      version: '1.0.0'
    },
    externalDocs: {
      url: 'https://swagger.io',
      description: 'documented with swagger'
    },
    host: 'localhost',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json']
  }
};
