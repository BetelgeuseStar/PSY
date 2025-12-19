const { PickedMarkersService } = require("../services");

class PickedMarkersController {
  async getPickedMarkers(req, res, next) {
    try {
      const { personId, sourceId } = req.body;
      const pickedMarkers = await PickedMarkersService.getPickedMarkers(
        personId,
        sourceId,
      );

      res.json(pickedMarkers);
    } catch (e) {
      next(e);
    }
  }

  async updatePickedMarkers(req, res, next) {
    try {
      const { pickedIds, type, personId, sourceId } = req.body;
      const updatedPickedMarkers =
        await PickedMarkersService.updatePickedMarkers(
          pickedIds,
          type,
          personId,
          sourceId,
        );
      res.json(updatedPickedMarkers);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new PickedMarkersController();
