require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const sequelize = require("./config/db");
require("./models/index");
const errorMiddleware = require("./middlewares/errorMiddleware");

const express = require("express");
const app = express();
const routes = require("./routes");
const crypto = require("crypto");
const { Source, Role, User, Marker } = require("./models");
const markerRecords = require("./config/defaultSourceMarkers");

const PORT = process.env.PORT || 5000;

const initRoles = async () => {
  const roles = ["user", "admin", "system"];

  for (const roleName of roles) {
    await Role.findOrCreate({
      where: { name: roleName },
      defaults: { name: roleName },
    });
  }
};

const initSystemUser = async () => {
  const secureString = crypto.randomBytes(32).toString("base64");

  await User.findOrCreate({
    where: {
      id: 1,
      login: "System",
      email: "email@does.not.exist.com",
      isActivated: true,
      RoleId: 3,
    },
    defaults: {
      password: secureString,
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
      author: "System",
      UserId: 1,
    },
  });
};

const initBaseSourceMarkers = async () => {
  await Marker.bulkCreate(markerRecords, {
    ignoreDuplicates: true,
  });
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
  .sync()
  .then(async () => {
    await initRoles();
    await initSystemUser();
    await initBaseSource();
    await initBaseSourceMarkers();
  })
  .then(() => console.log("All models were synchronized successfully."))
  .catch((e) => console.log(e));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
