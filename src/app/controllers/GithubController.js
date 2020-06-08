import * as GithubService from './../services/github-service';

class GithubController {
  async index(req, res) {
    const user = await GithubService.authenticate(req, res);
    return res.status(200).json({ data: user });
  }
}

export default new GithubController();
