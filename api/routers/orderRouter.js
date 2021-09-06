import express from 'express';

import orderController from '../controllers/orderController';
import auth from '../middlewares/authMiddleware';

const orderRouter = express.Router();

orderRouter.use(auth);
orderRouter.post('/estimate', (req, res, next) => orderController.estimate(req, res, next));

export default orderRouter;
