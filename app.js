import chalk from 'chalk';
import express from 'express';

import config from './config/index';
import api from './api/index';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', api);

app.listen(config.port, () => console.info(chalk.green(`Microservice has started on port ${config.port}`)));
