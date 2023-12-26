const express = require("express");
const routerV1 = require("./router");
const cors = require("cors");


class App {
  constructor() {
    this.app = express();
  }
  start() {
    this.app.use(cors());
    this.app.use(express.json())
   
    this._attachRouter();
    this.app.listen(8080);
    console.log("server running at port " + 8080);
  }
  _attachRouter() {
    this.app.use("/lactosafe/v1", routerV1);
  }
}

module.exports = new App();
