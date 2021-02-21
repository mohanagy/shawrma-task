import express from 'express';
import { restaurantsController } from '../../controllers';

const router = express.Router();

router.route('/').get(restaurantsController.getRestaurants);

export default router;
