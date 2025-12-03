class SourceDto {
  id;
  title;
  isPublic;
  info;
  photoUrl;

  constructor(model) {
    this.title = model.title;
    this.isPublic = model.isPublic;
    this.id = model.id;
    this.info = model.info;
    this.photoUrl = model.photoUrl;
    this.userId = model.userId;
    this.personId = model.personId;
  }
}

module.exports = SourceDto;
