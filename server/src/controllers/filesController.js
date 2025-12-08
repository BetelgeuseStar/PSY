const { join } = require("path");

class FilesController {
  async upload(req, res, next) {
    try {
      res.json(req.file.path);
    } catch (e) {
      next(e);
    }
  }

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
