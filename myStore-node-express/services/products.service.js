/* eslint-disable linebreak-style */
const boom = require('@hapi/boom');
const faker = require('faker');
const productsSchema = require('../schemas/db.products.schema');
const date = new Date();
const dateNow =
  date.getDate() + ' ' + (date.getMonth() + 1) + ' ' + date.getFullYear();

class ProductService {
  async create(product) {
    const newProduct = {
      ...product,
      createdAt: dateNow,
      modifiedAt: null,
    };
    if (typeof newProduct === 'object') {
      const dbProduct = new productsSchema(newProduct);
      dbProduct
        .save()
        .then((ok) => {
          console.log(ok);
        })
        .catch((err) => {
          console.log(err);
        });
      return [newProduct, 201, 'successfully created'];
    }
    throw boom.badRequest(`${newProduct} Must be an Object`);
  }

  async showAll() {
    return productsSchema
      .find()
      .then((ok) => ok)
      .catch((err) => {
        throw boom.internal(err);
      });
  }

  async findOneById(id) {
    return [
      201,
      productsSchema
        .findById(id)
        .then((ok) => ok)
        .catch((err) => {
          throw boom.notFound(`Product not found by id: ${id}`);
        }),
    ];
  }

  async updateOneById(id, changes) {
    if (typeof changes === 'object') {
      const foundProduct = await productsSchema
        .findByIdAndUpdate(id, { ...changes, modifiedAt: dateNow })
        .then((ok) => ok)
        .catch((err) => {
          throw boom.notFound(`Product not found by id: ${id}`);
        });

      return [204, foundProduct];
    }
    throw boom.badRequest('Must be an Object');
  }

  async physicalDelete(id) {
    const foundProduct = await productsSchema
      .findByIdAndDelete(id)
      .then((ok) => ok)
      .catch((err) => {
        throw boom.notFound(`Product not found by id: ${id}`);
      });

    return [204, foundProduct];
  }
}
module.exports = ProductService;
