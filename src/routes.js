import { Router } from 'express';
import { validate } from 'express-validation';

import IndexController from './app/controllers/IndexController';
import KudosController from './app/controllers/KudosController';
import GithubController from './app/controllers/GithubController';
import { createKudosValidation } from './app/middlewares/validations';

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
// routes.post('/me', IndexController.index);
routes.post(
  '/kudos',
  validate(createKudosValidation, {}, {}),
  KudosController.create
);

// Github
routes.post('/authenticate', GithubController.index);

export default routes;
