const path = require("path");
const fs = require("fs");
const sharp = require("sharp");

module.exports = async (req, res, next) => {
  if (!req.file) {
    return res.status(400).send("Файл не был загружен.");
  }

  try {
    const processedImageBuffer = await sharp(req.file.buffer).toBuffer();

    const uploadDir = path.join(__dirname, "../uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }

    const originalName = req.file.originalname;
    const fileExtension = path.extname(originalName);

    const filename = req.body.fileName;
    const filePath = `./uploads/${filename}${fileExtension}`;

    fs.writeFileSync(filePath, processedImageBuffer);

    res.json(filePath);
  } catch (error) {
    console.error(error);
    res.status(500).send("Ошибка при обработке изображения.");
  }
};
