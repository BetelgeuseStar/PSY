const { Person, Marker } = require("../models");
const MarkerDto = require("../dtos/markerDto");

class MarkerService {
  async getMarkerList(sourceId) {
    return await Marker.findAll({
      where: {
        SourceId: sourceId,
      },
    });
  }

  async deleteMarker(id) {
    return await Person.destroy({
      where: {
        id,
      },
    });
  }

  async createMarker(newMarkerData) {
    const { sourceId, ...restMarkerData } = newMarkerData;
    const markerData = await Marker.create({
      SourceId: sourceId,
      ...restMarkerData,
    });
    return new MarkerDto(markerData);
  }

  async updateMarker(updatedMarker) {
    const { sourceId, ...restMarker } = updatedMarker;

    const markerData = await Marker.update(
      {
        SourceId: sourceId,
        ...restMarker,
      },
      {
        where: {
          id: updatedMarker.id,
        },
        returning: true,
      },
    );

    return new MarkerDto(markerData);
  }
}

module.exports = new MarkerService();
