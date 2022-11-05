const express = require('express');

const APP = express();
const PORT = 3000;

APP.get('/', (req, res) => {
  res.send('My server ou llea')
})

APP.get('/products', (req, res) => {
  res.json([
    {
      nombre: 'Minion ou llea',
      imagen: 'https://th.bing.com/th/id/R.52007b311b27f37629ca33829eef696d?rik=90YTzO0owNcyHQ&pid=ImgRaw&r=0',
      descripcion: 'Minion ou llea señores'
    },
    {
      nombre: 'Perrito chacarron macarron',
      imagen: 'https://i.ytimg.com/vi/ZiVRMhciCUg/hqdefault.jpg',
      descripcion: 'Yea song song macarron ou'
    }
  ])
})

APP.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    ID: id,
    nombre: 'Perrito chacarron macarron',
    imagen: 'https://i.ytimg.com/vi/ZiVRMhciCUg/hqdefault.jpg',
    descripcion: 'Yea song song macarron ou'
  })
})

APP.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId: categoryId,
    productId: productId
  })
})

APP.listen(PORT, () => {

})
