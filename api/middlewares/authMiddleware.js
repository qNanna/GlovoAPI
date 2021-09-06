import jwt from 'jsonwebtoken';

import config from '../../config';

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers.authorization;
  if (!bearerHeader) {
    return res.status(403).send('A token is required');
  }
  const [, token] = bearerHeader.split(' ');
  try {
    req.user = jwt.verify(token, config.jwtTokenKey);
  } catch (err) {
    return res.status(401).send('Invalid Token');
  }
  return next();
};

export default verifyToken;
