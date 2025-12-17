class PickedMarkersDto {
  pickedIds;

  constructor(model) {
    this.pickedIds = model.pickedIds;
  }
}

module.exports = PickedMarkersDto;
