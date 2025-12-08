const { join } = require("path");

class FilesController {
  async download(req, res, next) {
    try {
      const url = req.body.url;
      res.sendFile(join(__dirname, `../${url}`));
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new FilesController();
