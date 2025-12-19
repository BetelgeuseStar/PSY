const { Person } = require("../models");
const { Op } = require("sequelize");
const PersonDto = require("../dtos/personDto");

class PersonService {
  async getPersonsList(userId) {
    return await Person.findAll({
      where: {
        [Op.or]: [{ UserId: userId }, { isPublic: true }],
      },
    });
  }

  async getPerson(id, userId) {
    return await Person.findOne({
      where: {
        [Op.and]: [
          { id },
          { [Op.or]: [{ UserId: userId }, { isPublic: true }] },
        ],
      },
    });
  }

  async deletePerson(id, userId) {
    return await Person.destroy({
      where: {
        [Op.and]: [{ id }, { UserId: userId }],
      },
    });
  }

  async createPerson(userId, userLogin) {
    const personData = await Person.create({
      UserId: userId,
      author: userLogin,
    });
    const tempDto = new PersonDto(personData);
    const [, updatedData] = await Person.update(
      { ...tempDto, name: `Без имени ${tempDto.id}` },
      { where: { id: tempDto.id }, returning: true, plain: true },
    );
    return new PersonDto(updatedData);
  }

  async updatePerson(updatedPerson) {
    const { userId, sourceId, ...restPerson } = updatedPerson;

    const personData = await Person.update(
      {
        ...restPerson,
        UserId: userId,
        SourceId: sourceId,
      },
      {
        where: {
          [Op.and]: [{ id: updatedPerson.id }, { UserId: userId }],
        },
        returning: true,
      },
    );

    return new PersonDto(personData);
  }
}

module.exports = new PersonService();
