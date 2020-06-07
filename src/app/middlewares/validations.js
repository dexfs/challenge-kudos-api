import { Joi } from 'express-validation';

export const createKudosValidation = {
  body: Joi.object({
    kudo_id: Joi.string().required(),
    from_user_id: Joi.number().required(),
    to_user_id: Joi.number().required(),
    comment: Joi.string().optional(),
  }),
};

export const githubValidation = {
  body: Joi.object({
    client_id: Joi.string().required(),
    redirect_id: Joi.string().required(),
    client_secret: Joi.string().required(),
    code: Joi.string().required(),
  }),
};
