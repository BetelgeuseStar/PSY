class PickedMarkersDto {
  pickedIds;
  type;

  constructor(model) {
    this.pickedIds = model.pickedIds;
    this.type = model.type;
  }
}

module.exports = PickedMarkersDto;
