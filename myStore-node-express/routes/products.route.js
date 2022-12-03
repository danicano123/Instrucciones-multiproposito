const express = require('express');
const ProductService = require('../services/products.service');

const router = express.Router();
const service = new ProductService();

// GET methods
router.get('/', async (req, res, next) => {
  try {
    res.json(await service.showAll());
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOneById(id);

    res.status(product[0]).json(product[1]);
  } catch (error) {
    next(error);
  }
});

// POST method

router.post('/', async (req, res, next) => {
  const { body } = req;
  console.log(body);
  try {
    const product = await service.create(body);
    res
      .status(product[1])
      .json(`${Object.values(product[0])}  =>  ${product[2]}`);
  } catch (error) {
    next(error);
  }
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
