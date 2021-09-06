import chalk from 'chalk';

import config from '../../config';
import redis from '../../redis/index';
import utils from '../../utils/index';
import glovoService from '../../services/glovoService';

class OrderController {
  async estimate(req, res, next) {
    try {
      const { locationFrom, locationTo } = req.body;
      const key = utils.getHash(req.body);
      let data = await redis.get(key);
      if (!data) {
        const order = await glovoService.estimateOrder(locationFrom, locationTo);
        if (order && !order.error) {
          data = glovoService.getDiscount(order);
          await redis.setEx(key, config.redisDataLifeTime, data);
        } else {
          data = order;
        }
      }
      res.json(data);
    } catch (err) {
      console.error(chalk.red(err));
      next(err);
    }
  }
}

export default new OrderController();
