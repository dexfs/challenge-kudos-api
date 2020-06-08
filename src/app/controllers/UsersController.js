import * as usersService from './../services/users-service';

class UsersController {
  async index(req, res) {
    const users = await usersService.all(req.user);
    // console.log({ users });
    return res.json({ data: users });
  }
}

export default new UsersController();
