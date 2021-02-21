import mongoose from 'mongoose';
import { toJSON } from './plugins/index';

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

// add plugin that converts mongoose to json
restaurantsSchema.plugin(toJSON);

/**
 * @typedef Restaurants
 */
export const Restaurants = mongoose.model('Restaurants', restaurantsSchema);

export default Restaurants;
