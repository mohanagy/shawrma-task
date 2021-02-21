import { Restaurants } from '../models/restaurants';

export const getRestaurants = async () => {
  const result = await Restaurants.find();
  return result;
};
