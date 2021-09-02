import chalk from 'chalk';

import glovoService from '../../services/glovoService';

class OrderController {
  async estimate(req, res, next) {
    try {
      const { locationFrom, locationTo } = req.body;
      const result = await glovoService.estimateOrder(locationFrom, locationTo);
      res.json(result);
    } catch (err) {
      console.error(chalk.red(err));
      next(err);
    }
  }
}

export default new OrderController();
