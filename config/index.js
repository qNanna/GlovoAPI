import dotenv from 'dotenv-safe';

dotenv.config({
  allowEmptyValues: false,
  path: './.env',
  example: './.env.example',
});

export default {
  host: process.env.HOST || '127.0.0.1',
  port: process.env.PORT || 3053,
  glovoAPIDomain: process.env.API_URL || 'https://api.glovoapp.com/',
  glovoAPIKey: process.env.API_KEY,
  discount: process.env.DISCOUNT || 20,
  jwtTokenKey: process.env.JWT_TOKEN_KEY || '6BjRkLTwO6rg4KTp6638V0j2kKxnBpZI',
  redisDataLifeTime: process.env.REDIS_DATA_LIFE_TIME || 10,
};
