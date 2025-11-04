require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const sequelize = require("./config/db");
require("./models/index");
const errorMiddleware = require("./middlewares/errorMiddleware");

const express = require("express");
const app = express();
const routes = require("./routes");

const PORT = process.env.PORT || 5000;

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
  .sync({ force: true })
  .then(() => console.log("All models were synchronized successfully."))
  .catch((e) => console.log(e));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
