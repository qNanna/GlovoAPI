import fetch from 'node-fetch';

import config from '../config/index';

const routes = {
  estimate: `${config.glovoAPIDomain}b2b/orders/estimate`,
  oneWay: `${config.glovoAPIDomain}b2b/orders`,
};

class GlovoService {
  async estimateOrder(from, to) {
    const data = this.buildData({ from, to });
    const request = await fetch(routes.estimate, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Authorization: config.glovoAPIKey,
      },
    });
    return request.json();
  }

  getDiscount({ total }) {
    const discount = total.amount - (total.amount / 100) * config.discount;
    return { total: { ...total, amount: discount } };
  }

  buildData({ from, to }, description = 'A 30cm by 30cm box', label = 'Empty') {
    return {
      scheduleTime: null,
      description,
      addresses: [
        {
          type: 'PICKUP', lat: from.lat, lon: from.lon, label,
        },
        {
          type: 'DELIVERY', lat: to.lat, lon: to.lon, label,
        },
      ],
    };
  }
}

export default new GlovoService();
