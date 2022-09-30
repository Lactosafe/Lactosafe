const express = require("express");
const routerV1 = require("./router");

class App {
  constructor() {
    this.app = express();
  }
  start() {
    this._attachRouter();
    this.app.listen(8080);
    console.log("server running at port " + (8080));
  }
  _attachRouter() {
    this.app.use("/lactosafe/v1", routerV1);
  }

}

module.exports = new App();
