import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import IndexController from './app/controllers/IndexController';

const routes = new Router();

routes.get('/kudos/all', (req, res) => {
  return res.json({ data: 'ok' });
});
routes.get('/kudos/chart', (req, res) => {
  return res.json({ data: 'ok' });
});
routes.get('/users/chart', (req, res) => {
  return res.json({ data: 'ok' });
});

// post
routes.post(
  '/me',
  celebrate({
    [Segments.BODY]: Joi.object({
      owner: Joi.string().required(),
      repo: Joi.string().required(),
    }),
  }),
  IndexController.index
);
routes.post('/kudos', (req, res) => {
  return res.status(201).json({ data: req.body });
});

export default routes;
