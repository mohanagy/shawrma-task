import express from 'express';
import restaurants from './restaurants';

const router = express.Router();

export const defaultRoutes = [
  {
    path: '/restaurants',
    route: restaurants,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
