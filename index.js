global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;

const express = require("express");
const mongoose = require("mongoose");

const router = require("./routers/router");

const PORT = 5000;

const app = express();

app.use(express.json({ extended: false }));
app.get("/test", (req, res) => res.status(200).send("OK"));
app.use("/", router);
const start = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://JuliaShandraDev:ITop1000ShaJul@cluster.u9grn.mongodb.net/test?retryWrites=true&w=majority`
    );
    if (process.env.NODE_ENV !== "test") {
      app.listen(PORT);
    }
  } catch (e) {
    throw new Error(e);
  }
};
start();

module.exports = { app };
