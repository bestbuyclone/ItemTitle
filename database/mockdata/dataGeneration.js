faker.seed(38);
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const csvWriter = createCsvWriter({
  header: [
    { id: "id", title: "ID" },
    { id: "title", title: "TITLE" },
    { id: "model", title: "MODEL" },
    { id: "sku", title: "SKU" }
  ],
  path: "./mockData.csv"
});

let fakeProjects = 1000;
let batchNumber = 200;
let batchlimit = fakeProjects / batchNumber;

(async () => {
  let fakeData, projectCount, lastProject;
  let count = 0;
  let createFakeItem = () => ({
    title: (() => {
      return `${faker.commerce.productName()} / ${faker.commerce.department()} / ${faker.commerce.productAdjective()} /  ${faker.commerce.productMaterial()}`;
    })(),
    model: faker.finance.bitcoinAddress(),
    sku: faker.random.number()
  });

  while (count < batchNumber) {
    fakeData = [];
    for (i = 0; i < batchlimit; i++) {
      fakeData.push(createFakeItem());
    }
    count++;
    (projectCount = fakeData.length * count),
      (lastProject = fakeData[fakeData.length - 1].title);
    console.log(`FAKE-ITEM NUMBER: ${projectCount} is ${lastProject}`);
    await csvWriter.writeRecords(fakeData).catch(err => console.error(err));
  }
})();
