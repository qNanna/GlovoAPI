import utils from '../../utils/index';

class ServiceController {
  async getDevDependencies(req, res) {
    if (!this.proj) this.proj = await utils.readFile('./package.json');
    res.send(Object.keys(this.proj.dependencies));
  }

  getUptime(req, res) {
    const healthcheck = {
      uptime: process.uptime(),
      message: 'OK',
      timestamp: new Date().toLocaleString(),
    };

    try {
      res.send(healthcheck);
    } catch (e) {
      healthcheck.message = e;
      res.status(503).send();
    }
  }
}

export default new ServiceController();
