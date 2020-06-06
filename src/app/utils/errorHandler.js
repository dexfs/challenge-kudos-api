import Youch from 'youch';

export const axiosNotFoundError = (err, req, res, next) => {
  if (err?.response?.status === 404) {
    return res.status(404).json({ error: 'Not Found' });
  }

  next(err);
};

export const internalError = async (err, req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    const errors = new Youch(err, req).toJSON();
    return res.status(500).json(errors);
  }

  return res.status(500).json({ error: 'Internal server error' });
};
