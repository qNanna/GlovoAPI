import express from 'express';

import serviceController from '../controllers/serviceController';

const apiConfigRouter = express.Router();

apiConfigRouter.get('/dependencies', (req, res) => serviceController.getDevDependencies(req, res));
apiConfigRouter.get('/healthcheck', (req, res) => serviceController.getUptime(req, res));

export default apiConfigRouter;
