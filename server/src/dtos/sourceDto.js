class SourceDto {
  id;
  title;
  isPublic;
  info;
  photoUrl;
  userId;
  author;

  constructor(model) {
    this.title = model.title;
    this.isPublic = model.isPublic;
    this.id = model.id;
    this.info = model.info;
    this.photoUrl = model.photoUrl;
    this.userId = model.UserId;
    this.author = model.author;
  }
}

module.exports = SourceDto;
