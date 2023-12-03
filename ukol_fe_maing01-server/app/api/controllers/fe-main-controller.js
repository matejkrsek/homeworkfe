"use strict";
const FeMainAbl = require("../../abl/fe-main-abl.js");

class FeMainController {
  init(ucEnv) {
    return FeMainAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }

  load(ucEnv) {
    return FeMainAbl.load(ucEnv.getUri(), ucEnv.getSession());
  }

  loadBasicData(ucEnv) {
    return FeMainAbl.loadBasicData(ucEnv.getUri(), ucEnv.getSession());
  }
}

module.exports = new FeMainController();
