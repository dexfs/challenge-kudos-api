import * as GithubService from './../services/github-service';

class GithubController {
  async index(req, res) {
    await GithubService.authenticate(req, res);
  }
}

export default new GithubController();
