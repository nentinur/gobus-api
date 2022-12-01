const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const { Client } = require("pg");
const indexRoutes = require("./routes/index");
const busRoutes = require("./routes/bus");
const pesananRoutes = require("./routes/pesanan");
const posisiRoutes = require("./routes/posisi");

const app = express();
const port = 3100;

dotenv.config();
const client = new Client();
client.connect();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use("", indexRoutes);
app.use("/bus", busRoutes);
app.use("/pesanan", pesananRoutes);
app.use("/posisi", posisiRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
