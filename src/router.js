const express = require("express");

const signup = require("./apis/signup");
const fetchrole = require("./apis/fetchrole");
const viewadmin = require("./apis/viewadmin");
const viewfarmer = require("./apis/viewfarmer");
const viewaggregator = require("./apis/viewaggregator");
const viewfactory = require("./apis/viewfactory");
const viewenduser = require("./apis/viewenduser");

const router = express.Router();

const asyncRoute = (routeHandler) => async (req, res, next) => {
  try {
    await routeHandler(req, res, next);
    next();
  } catch (error) {
    next(error);
  }
};

router.post("/apis/signup", asyncRoute(signup));
router.get("/apis/fetchrole", asyncRoute(fetchrole));
router.get("/apis/viewadmin", asyncRoute(viewadmin));
router.get("/apis/viewfarmer", asyncRoute(viewfarmer));
router.get("/apis/viewaggregator", asyncRoute(viewaggregator));
router.get("/apis/viewfactory", asyncRoute(viewfactory));
router.get("/apis/viewenduser", asyncRoute(viewenduser));

module.exports = router;
