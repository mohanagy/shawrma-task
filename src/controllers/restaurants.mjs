import httpStatus from 'http-status';
import { catchAsync } from '../utils/catchAsync';
import { restaurantsServices } from '../services';

export const getRestaurants = catchAsync(async (req, res) => {
  const restaurants = await restaurantsServices.getRestaurants();
  return res.status(httpStatus.CREATED).send({ restaurants });
});
