/* eslint-disable linebreak-style */
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
      if (Object.keys(newProduct).toString() === 'id,name,color,price,img') {
        this.products.push(newProduct);
        return [newProduct, 201, 'successfully created'];
      }
      return [
        {
          message: 'data missing',
        },
        400,
        'invalid format',
      ];
    }
    return [newProduct, 400, 'is not an object'];
  }

  async showAll() {
    return this.products;
  }

  async findOneById(id) {
    const product = this.products.find((element) => element.id === id);
    if (product) return [201, product];
    return [404, 'Not found'];
  }

  async updateOneById(id, changes) {
    if (typeof changes === 'object') {
      if (
        Object.keys(changes).toString().includes('id') ||
        Object.keys(changes).toString().includes('name') ||
        Object.keys(changes).toString().includes('price') ||
        Object.keys(changes).toString().includes('color') ||
        Object.keys(changes).toString().includes('img')
      ) {
        const index = this.products.findIndex((element) => element.id === id);
        if (index !== -1) {
          const product = { ...this.products[index], ...changes };
          this.products[index] = product;
          return [204, product];
        }
        return [404, 'Not Found'];
      }
      return [400, 'Invalid entries'];
    }
    return [400, 'Object Expected'];
  }

  async physicalDelete(id) {
    const index = this.products.findIndex((element) => element.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
      return [200, this.products[index]];
    }
    return [404, 'Not Found'];
  }
}

module.exports = ProductService;
