const markerService = require("../services/markerService");
const MarkerDto = require("../dtos/markerDto");

class MarkerController {
  async getMarkerList(req, res, next) {
    try {
      const sourceId = req.params.sourceId;
      const markersData = await markerService.getMarkerList(sourceId);

      const markers = markersData.map((marker) => new MarkerDto(marker));
      res.json(markers);
    } catch (e) {
      next(e);
    }
  }

  async createMarker(req, res, next) {
    try {
      const newMarkerData = req.body;
      const newMarker = await markerService.createMarker(newMarkerData);
      return res.json(newMarker);
    } catch (e) {
      next(e);
    }
  }

  async updateMarker(req, res, next) {
    try {
      const updatedData = req.body;
      const updatedMarker = await markerService.updateMarker(updatedData);
      res.json(updatedMarker);
    } catch (e) {
      next(e);
    }
  }

  async deleteMarker(req, res, next) {
    try {
      const id = req.params.id;
      await markerService.deleteMarker(id);

      res.sendStatus(200);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new MarkerController();
