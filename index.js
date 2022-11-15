const express = require('express');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const APP = express();
const PORT = 3000;

APP.use(express.json());

APP.get('/', (req, res) => {
  res.send('My server ou llea')
})

routerApi(APP);

APP.use(logErrors);
APP.use(boomErrorHandler);
APP.use(errorHandler);

APP.listen(PORT, () => {
  console.log(`Running at: http://localhost:${PORT}/`);
})
