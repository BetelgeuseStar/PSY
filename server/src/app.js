require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const sequelize = require("./config/db");
require("./models/index");
const errorMiddleware = require("./middlewares/errorMiddleware");

const express = require("express");
const app = express();
const routes = require("./routes");
const { Source, Role, User, Marker } = require("./models");
const markerRecords = require("./config/defaultSourceMarkers");
const bcrypt = require("bcrypt");

const PORT = process.env.PORT || 5000;

function getSecret(envVarName) {
  const filePath = process.env[envVarName];
  if (filePath && fs.existsSync(filePath)) {
    return fs.readFileSync(filePath, "utf8").trim();
  }
  console.log("Пароль администратора не найден в секретах!");
  return null;
}

const initRoles = async () => {
  const roles = ["user", "admin"];

  for (const roleName of roles) {
    await Role.findOrCreate({
      where: { name: roleName },
      defaults: { name: roleName },
    });
  }
};

const initAdminUser = async () => {
  const password =
    getSecret("USER_PASSWORD_PATH") ?? process.env.UNSAFE_ADMIN_PASSWORD;

  const hashPassword = await bcrypt.hash(password, 3);

  await User.findOrCreate({
    where: {
      id: 1,
      login: "admin",
      email: "tassot@mail.ru",
      isActivated: true,
      RoleId: 2,
    },
    defaults: {
      password: hashPassword,
    },
  });
};

const initBaseSource = async () => {
  await Source.findOrCreate({
    where: {
      id: 1,
      title: "Синтаксис Любви",
      isPublic: true,
      info: "",
      photoUrl: "./uploads/baseSourcePhoto.jpg",
      author: "admin",
      UserId: 1,
    },
  });
};

const initBaseSourceMarkers = async () => {
  const markers = await Marker.findAll();
  if (markers.length > 0) return;

  await Marker.bulkCreate(markerRecords);
};

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  }),
);
app.use("/api", routes);
app.use(errorMiddleware);

sequelize
  .sync({ force: false })
  .then(async () => {
    await initRoles();
    await initAdminUser();
    await initBaseSource();
    await initBaseSourceMarkers();
  })
  .then(() => console.log("All models were synchronized successfully."))
  .catch((e) => console.log(e));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
