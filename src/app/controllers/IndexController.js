class IndexController {
  async index(req, res) {
    return res.json({ data: req.user });
  }
}

export default new IndexController();
