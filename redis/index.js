import chalk from 'chalk';
import redis from 'redis';
import asyncRedis from 'async-redis';

class RedisClient {
  constructor() {
    if (RedisClient.exists) return RedisClient.instance;
    RedisClient.instance = this;
    RedisClient.exists = true;
    this.init();
  }

  async init() {
    const vanillaRedis = redis.createClient();
    this.redis = asyncRedis.decorate(vanillaRedis);
    this.redis.on('connect', () => console.info(chalk.blue('Redis client connected on', vanillaRedis.address)));
    this.redis.on('error', (err) => console.error(chalk.red('Something went wrong ', err)));

    process.on('exit', this.closeRedis);
  }

  async getInstance() {
    return this.redis;
  }

  async closeRedis() {
    console.warn(chalk.yellow('Shutting redis client...'));
    await this.redis.quit();
  }

  async setEx(key, lifeTime, value) {
    await this.redis.setex(key, lifeTime, JSON.stringify(value));
    console.log(chalk.yellow(`Saved to Redis for ${lifeTime} seconds: ${key}`));
  }

  async set(key, value) {
    const result = await this.redis.set(key, JSON.stringify(value));
    console.log(chalk.yellow(`Saved to Redis: ${value.total.discount.discountId}`));
    return result;
  }

  async get(key) {
    const result = await this.redis.get(key);
    try {
      return JSON.parse(result);
    } catch {
      return undefined;
    }
  }
}

export default new RedisClient();
