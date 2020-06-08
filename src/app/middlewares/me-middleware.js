import * as UsersService from '../services/users-service';

export default async (req, res, next) => {
  const userId = req.headers['x-auth-userid'];
  console.log(req.headers);
  req.user = await UsersService.me(userId);
  next();
};
