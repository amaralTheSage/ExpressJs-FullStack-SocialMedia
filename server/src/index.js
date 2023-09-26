const express = require("express");
const app = express();
const cors = require("cors"); // whitelisting my own computer to be able to do GET() requests

app.use(express.json());
app.use(cors());

const db = require("../models/index");

// Routers
const postRouter = require("../routes");
app.use("/posts", postRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server seems a'ight. Port 3001.");
  });
});
