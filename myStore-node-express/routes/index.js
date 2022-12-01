const productsRouter = require('./productsRoute');

const routerApi = (app) => {
  app.use('/products', productsRouter);
};

module.exports = routerApi;
