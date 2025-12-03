class PersonDto {
  id;
  name;
  isPublic;
  info;
  photoUrl;
  sourceId;
  userId;

  constructor(model) {
    this.name = model.name;
    this.isPublic = model.isPublic;
    this.id = model.id;
    this.info = model.info;
    this.photoUrl = model.photoUrl;
    this.userId = model.UserId;
    this.sourceId = model.SourceId;
  }
}

module.exports = PersonDto;
