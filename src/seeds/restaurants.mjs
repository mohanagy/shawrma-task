import mongoose from 'mongoose';

const restaurantsSchema = mongoose.Schema(
  {
    restaurantsName: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    log: {
      type: String,
      trim: true,
    },
    lat: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * @typedef Restaurants
 */
export const Restaurants = mongoose.model('Restaurants', restaurantsSchema);

export default Restaurants;
