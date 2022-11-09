const express = require('express');

const productsRouter = require('./products.router');
// const usersRouter = require('./users.router');
// const categoriesRouter = require('./categories.router');

function routerApi(APP){
  const router = express.Router();
  APP.use('/api/v1', router)

  router.use('/products', productsRouter);
  // router.use('/users', usersRouter);
  // router.use('/categories', categoriesRouter);
}

module.exports = routerApi;
