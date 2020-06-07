import * as kudosService from './../services/kudos-service';

class KudosController {
  async index(req, res) {
    return res.json({ data: [{}] });
  }

  async create(req, res) {
    await kudosService.give(req.body);
    return res.status(201).end();
  }
}

export default new KudosController();
