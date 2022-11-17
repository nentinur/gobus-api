const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const { Client } = require("pg");
const indexRoutes = require("./routes/index");
const busRoutes = require("./routes/bus");

const app = express();
const port = 3000;

dotenv.config();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use("", indexRoutes);
app.use("/bus", busRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
