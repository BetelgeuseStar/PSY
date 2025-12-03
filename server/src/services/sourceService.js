const { Source } = require("../models");
const { Op } = require("sequelize");
const SourceDto = require("../dtos/sourceDto");

class SourceService {
  async getSourcesList(userId) {
    return await Source.findAll({
      where: {
        [Op.or]: [{ UserId: userId }, { isPublic: true }],
      },
    });
  }

  async getSource(id, userId) {
    return await Source.findOne({
      where: {
        [Op.and]: [
          { id },
          { [Op.or]: [{ UserId: userId }, { isPublic: true }] },
        ],
      },
    });
  }

  async deleteSource(id, userId) {
    return await Source.destroy({
      where: {
        [Op.and]: [{ id }, { UserId: userId }],
      },
    });
  }

  async createSource(userId) {
    const sourceData = await Source.create({ UserId: userId });
    return new SourceDto(sourceData);
  }

  async updateSource(updatedSource) {
    const { userId, ...restSource } = updatedSource;

    const sourceData = await Source.update(
      {
        ...restSource,
        UserId: userId,
      },
      {
        where: {
          [Op.and]: [{ id: updatedSource.id }, { UserId: userId }],
        },
        returning: true,
      },
    );

    return new SourceDto(sourceData);
  }
}

module.exports = new SourceService();
