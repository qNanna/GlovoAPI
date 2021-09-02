import dotenv from 'dotenv';

dotenv.config();

export default {
  host: process.env.HOST || '127.0.0.1',
  port: process.env.PORT || 3053,
  glovoAPIDomain: process.env.API_URL || 'https://api.glovoapp.com/',
  glovoAPIKey: process.env.API_KEY,
};
