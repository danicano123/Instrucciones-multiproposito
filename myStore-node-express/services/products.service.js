/* eslint-disable linebreak-style */
const boom = require('@hapi/boom');
const faker = require('faker');

class ProductService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    for (let index = 0; index < 100; index++) {
      this.products.push({
        id: index.toString(),
        name: faker.commerce.productName(),
        color: faker.commerce.color(),
        price: faker.commerce.price(),
        img: faker.image.imageUrl(),
      });
    }
  }

  async create(product) {
    const newProduct = {
      id: this.products.length.toString(),
      ...product,
    };
    if (typeof newProduct === 'object') {
      this.products.push(newProduct);
      return [newProduct, 201, 'successfully created'];
    }
    throw boom.badRequest(`${newProduct} Must be an Object`);
  }

  async showAll() {
    return this.products;
  }

  async findOneById(id) {
    const product = this.products.find((element) => element.id === id);
    if (product) return [201, product];
    throw boom.notFound('Product not found');
  }

  async updateOneById(id, changes) {
    if (typeof changes === 'object') {
      const index = this.products.findIndex((element) => element.id === id);
      if (index !== -1) {
        const product = { ...this.products[index], ...changes };
        this.products[index] = product;
        return [204, product];
      }
      throw boom.notFound(`Product not found by id: ${id}`);
    }
    throw boom.badRequest('Must be an Object');
  }

  async physicalDelete(id) {
    const index = this.products.findIndex((element) => element.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
      return [200, this.products[index]];
    }
    throw boom.notFound('Product not found');
  }
}

module.exports = ProductService;
