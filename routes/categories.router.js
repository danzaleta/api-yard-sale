const express = require('express');
const router = express.Router();

router.get('/:categoryId', (req, res) => {
  const { categoryId } = req.params;
  res.json({
    categoryId: categoryId,
    // productId: productId
  })
})

module.exports = router;
