const userService = require("../services/userService");
const personService = require("../services/personService");
const PersonDto = require("../dtos/personDto");

class PersonController {
  async getPersonsList(req, res, next) {
    try {
      const refreshToken = req.cookies.refreshToken;
      const user = await userService.getUserByRefreshToken(refreshToken);
      const personsData = await personService.getPersonsList(user.id);

      const persons = personsData.map((person) => new PersonDto(person));
      res.json(persons);
    } catch (e) {
      next(e);
    }
  }

  async getPerson(req, res, next) {
    try {
      const refreshToken = req.cookies.refreshToken;
      const user = await userService.getUserByRefreshToken(refreshToken);

      const id = req.params.id;
      const personData = await personService.getPerson(id, user.id);

      if (!personData) return res.json(404);

      const personDto = new PersonDto(personData);
      res.json(personDto);
    } catch (e) {
      next(e);
    }
  }

  async createPerson(req, res, next) {
    try {
      const refreshToken = req.cookies.refreshToken;
      const user = await userService.getUserByRefreshToken(refreshToken);
      const newPerson = await personService.createPerson(user.id);
      return res.json(newPerson);
    } catch (e) {
      next(e);
    }
  }

  async updatePerson(req, res, next) {
    try {
      const updatedData = req.body;
      const updatedPerson = await personService.updatePerson(updatedData);
      res.json(updatedPerson);
    } catch (e) {
      next(e);
    }
  }

  async deletePerson(req, res, next) {
    try {
      const refreshToken = req.cookies.refreshToken;
      const user = await userService.getUserByRefreshToken(refreshToken);

      const id = req.params.id;
      await personService.deletePerson(id, user.id);

      res.sendStatus(200);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new PersonController();
