const path = require('path');
const { Seeder } = require('mongo-seeding');

const config = {
  database: {
    name: 'find-and-dine',
  },
  dropDatabase: true,
};
const seeder = new Seeder(config);
const collections = seeder.readCollectionsFromPath(
  path.resolve('./src/development-data/DiningLocations.ts'),
  {
    transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId],
  },
);

seeder
  .import(collections)
  .then(() => {
    console.log('Success');
  })
  .catch(err => {
    console.log('Error', err);
  });

module.exports = seeder;