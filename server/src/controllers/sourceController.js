const userService = require("../services/userService");
const sourceService = require("../services/sourceService");
const SourceDto = require("../dtos/sourceDto");

class SourceController {
  async getSourcesList(req, res, next) {
    try {
      const refreshToken = req.cookies.refreshToken;
      const user = await userService.getUserByRefreshToken(refreshToken);
      const sourcesData = await sourceService.getSourcesList(user.id);

      const sources = sourcesData.map((source) => new SourceDto(source));
      res.json(sources);
    } catch (e) {
      next(e);
    }
  }

  async getSource(req, res, next) {
    try {
      const refreshToken = req.cookies.refreshToken;
      const user = await userService.getUserByRefreshToken(refreshToken);

      const id = req.params.id;
      const sourceData = await sourceService.getSource(id, user.id);

      if (!sourceData) return res.json(404);

      const sourceDto = new SourceDto(sourceData);
      res.json(sourceDto);
    } catch (e) {
      next(e);
    }
  }

  async createSource(req, res, next) {
    try {
      const refreshToken = req.cookies.refreshToken;
      const user = await userService.getUserByRefreshToken(refreshToken);
      const newSource = await sourceService.createSource(user.id);
      return res.json(newSource);
    } catch (e) {
      next(e);
    }
  }

  async updateSource(req, res, next) {
    try {
      const updatedData = req.body;
      const updatedSource = await sourceService.updateSource(updatedData);
      res.json(updatedSource);
    } catch (e) {
      next(e);
    }
  }

  async deleteSource(req, res, next) {
    try {
      const refreshToken = req.cookies.refreshToken;
      const user = await userService.getUserByRefreshToken(refreshToken);

      const id = req.params.id;
      await sourceService.deleteSource(id, user.id);

      res.sendStatus(200);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new SourceController();
