const express = require("express");

const signup = require("./apis/signup");
const fetchrole = require("./apis/fetchrole");
const fetchdashbord = require("./apis/dashboards/fetchdashboard");

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
router.get("/apis/dashboards/:role", asyncRoute(fetchdashbord));

module.exports = router;
