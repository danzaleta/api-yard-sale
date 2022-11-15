const faker = require('faker');
const boom = require('@hapi/boom');

class ProductService {

  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 10;

    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlocked: faker.datatype.boolean()
      })
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data,
    }

    this.products.push(newProduct);
    return newProduct;
  }

  async find() {
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        resolve(this.products);
      }, 5000);
    })

  }

  async findOne(id) {

    const product = this.products.find(item => item.id === id);

    if (!product) {
      throw boom.notFound('product not found :(');
    }
    if (product.isBlocked) {
      throw boom.conflict('product blocked');
    }
    return product;
  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found :(');
    }

    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found :(');
    }

    this.products.slice(index, 1);
    return { message: `Deleted ${id}` }
  }

}

module.exports = ProductService;
