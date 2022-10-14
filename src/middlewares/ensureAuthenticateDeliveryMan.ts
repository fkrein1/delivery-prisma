import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import { AppError } from '../errors/AppError';

export const ensureAuthenticateDeliveryMan: RequestHandler = (req, _res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) throw new AppError(401, 'Token missing');

  const [, token] = authHeader.split(' ');

  try {
    const { sub } = jwt.verify(token, process.env.JWT_SECRET_DELIVERYMAN as string);
    req.id_deliveryman = sub as string;

    next();
  } catch (err) {
    throw new AppError(401, 'Invalid Token');
  }
};
