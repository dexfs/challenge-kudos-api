import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import IndexController from './app/controllers/IndexController';

const routes = new Router();

routes.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object({
      owner: Joi.string().required(),
      repo: Joi.string().required(),
    }),
  }),
  IndexController.index
);

export default routes;
