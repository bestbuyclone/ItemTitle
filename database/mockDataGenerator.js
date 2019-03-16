const faker = require("faker");
faker.seed(1337);

const createFakeItem = id => ({
  titleId: id,
  title: (() => {
    return `${faker.commerce.productName()} / ${faker.commerce.department()} / ${faker.commerce.productAdjective()} / ${faker.commerce.productMaterial()}`;
  })(),
  model: faker.finance.bitcoinAddress(),
  sku: faker.random.number()
});

const batchData = num => {
  const results = [];
  for (i = 1; i < num + 1; i++) {
    results.push(createFakeItem(i));
  }
  console.log(results[600], "and length of array", results.length);
  return results;
};

module.exports = { createFakeItem, batchData };
