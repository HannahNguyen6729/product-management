const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;
const router = require("./routers/rootRouter");
const { sequelize } = require("./productModel");

//CORS
app.use(cors());

app.use(express.json());
//router
app.use(router);

// synchronizing all models at once
const syncModel = async () => {
  await sequelize.sync({ alter: true });
};
syncModel();

//checking connection
const checkConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully");
  } catch (err) {
    console.error("Unable to connect to the database : ", err);
  }
};
checkConnection();

app.listen(PORT, () => console.log("listening on port " + PORT));
