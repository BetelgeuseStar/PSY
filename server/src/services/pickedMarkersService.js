const { PickedMarkers } = require("../models");
const { Op } = require("sequelize");
const { PickedMarkersDto } = require("../dtos");

class PickedMarkersService {
  async getPickedMarkers(personId, sourceId) {
    let pickedMarkers = await PickedMarkers.findOne({
      where: {
        [Op.and]: [{ PersonId: personId }, { SourceId: sourceId }],
      },
    });

    if (!pickedMarkers) {
      pickedMarkers = await PickedMarkers.create({
        PersonId: personId,
        SourceId: sourceId,
        pickedMarkers: [],
        type: [0, 0, 0, 0],
      });
    }

    return new PickedMarkersDto(pickedMarkers);
  }

  async updatePickedMarkers(pickedIds, type, personId, sourceId) {
    const pickedMarkersData = await PickedMarkers.update(
      {
        pickedIds,
        type,
      },
      {
        where: {
          [Op.and]: [{ PersonId: personId }, { SourceId: sourceId }],
        },
        returning: true,
      },
    );

    return new PickedMarkersDto(pickedMarkersData);
  }
}

module.exports = new PickedMarkersService();
