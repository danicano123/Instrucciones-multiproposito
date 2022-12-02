const express = require('express');
const ProductService = require('../services/products.service');

const router = express.Router();
const service = new ProductService();

// GET methods
router.get('/', async (req, res) => {
  res.json(await service.showAll());
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const product = await service.findOneById(id);

  res.status(product[0]).json(product[1]);
});

// POST method

router.post('/', async (req, res) => {
  const { body } = req;
  const newProduct = await service.create(body);
  res
    .status(newProduct[1])
    .json(`${Object.values(newProduct[0])}  =>  ${newProduct[2]}`);
});

// PATCH method

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const product = await service.updateOneById(id, body);
  res.status(product[0]).json(product[1]);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await service.physicalDelete(id);
  res.status(product[0]).json(product[1]);
});
module.exports = router;
