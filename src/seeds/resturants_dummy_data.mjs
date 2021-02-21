import seeder from 'mongoose-seed';
import config from '../config/config';

const db = config.mongoose.url;

// Data array containing seed data - documents organized by Model
const data = [
  {
    model: 'Restaurants',
    documents: [
      {
        restaurantsName: 'Dubai Mall restaurant',
        log: 25.0544385,
        lat: 55.1604166,
        address: 'Dubai - Dubai mall',
      },
      {
        restaurantsName: 'Sharja restaurant',
        log: 25.0544395,
        lat: 55.1604116,
        address: 'Dubai - Dubai mall , 2nd floor',
      },
      {
        restaurantsName: 'Ain restaurant',
        log: 25.0544595,
        lat: 55.1601116,
        address: 'Dubai - Dubai mall , 3nd floor',
      },
    ],
  },
];

// Connect to MongoDB via Mongoose
seeder.connect(db, function () {
  // Load Mongoose models
  seeder.loadModels(['./src/seeds/restaurants.mjs']);

  // Clear specified collections
  seeder.clearModels(['Restaurants'], function () {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function () {
      seeder.disconnect();
    });
  });
});
