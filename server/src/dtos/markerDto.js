class MarkerDto {
  id;
  value;
  info;
  sourceId;
  psyFunction;
  psyLevel;
  rating;

  constructor(model) {
    this.id = model.id;
    this.value = model.value;
    this.info = model.info;
    this.rating = model.rating;
    this.photoUrl = model.photoUrl;
    this.psyFunction = model.psyFunction;
    this.psyLevel = model.psyLevel;
    this.sourceId = model.SourceId;
  }
}

module.exports = MarkerDto;
