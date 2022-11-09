const express = require('express');
const routerApi = require('./routes');

const APP = express();
const PORT = 3000;

APP.use(express.json());

APP.get('/', (req, res) => {
  res.send('My server ou llea')
})

APP.listen(PORT, () => {
  console.log(`Running at: http://localhost:${PORT}/`);
})

routerApi(APP);
