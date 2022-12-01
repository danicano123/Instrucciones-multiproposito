const express = require('express');

const router = express.Router();

const products = [
  {
    id: 1,
    name: 'laptop',
    price: '$1,000.000',
  },
  {
    id: 2,
    name: 'movil',
    price: '$500.000',
  },
];
// GET methods
router.get('/', (req, res) => {
  res.json(products);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const product = products.forEach((object) => {
    // eslint-disable-next-line eqeqeq
    if (object.id == id) {
      return object;
    }
    return {};
  });

  res.json(product);
});

// POST method

router.post('/', async (req, res) => {
  const body = req.body;
  if (typeof body == 'object') {
    if (Object.keys(body).toString() === 'id,name,price') {
      products.push(body);
      res.status(201).json('successfully created');
    } else {
      res.json({
        message: 'data missing',
        expected: {
          id: 'number',
          name: 'something',
          price: 'number',
        },
        received: body,
      });
    }
  } else res.send('only Objects pls');
});

// PATCH method

router.patch('/:id', async (req, res) => {
  const body = req.body;
  if (typeof body == 'object') {
    if (
      Object.keys(body).toString().includes('id')
      || Object.keys(body).toString().includes('name')
      || Object.keys(body).toString().includes('price')
    ) {
      res.send('element has been modified');
    } else {
      res.json({
        message: 'data missing',
        expected: {
          id: 'number',
          name: 'something',
          price: 'number',
        },
        received: body,
      });
    }
  } else res.send('only Objects pls');
});
module.exports = router;
