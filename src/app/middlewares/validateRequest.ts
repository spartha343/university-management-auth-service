import { RequestHandler } from 'express';
import { AnyZodObject } from 'zod';

const validateRequest =
  (schema: AnyZodObject): RequestHandler =>
  async (req, res, next) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
        cookies: req.cookies
      });
      return next();
    } catch (error) {
      next(error);
    }
  };

export default validateRequest;
