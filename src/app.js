import express from 'express';
import { ValidationError } from 'express-validation';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import * as Sentry from '@sentry/node';
import 'express-async-errors';

import routes from './routes';
import meMiddleware from './app/middlewares/me-middleware';
import sentryConfig from './config/sentry';
import { axiosNotFoundError, internalError } from './app/utils/errorHandler';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

class App {
  constructor() {
    this.server = express();
    Sentry.init(sentryConfig);
    this.server.use(Sentry.Handlers.requestHandler());
    this.server.disable('x-powered-by');
    this.server.use(cors());
    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(helmet());
    this.server.use(morgan('dev'));
    this.server.use(limiter);
  }

  routes() {
    this.server.use(meMiddleware);
    this.server.use('/api/v1', routes);
  }

  exceptionHandler() {
    this.server.use(function (err, req, res, next) {
      if (err instanceof ValidationError) {
        return res.status(err.statusCode).json(err);
      }

      next();
    });
    this.server.use(internalError);
  }
}

export default new App().server;
