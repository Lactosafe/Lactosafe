const express = require("express");

const signup = require("./apis/signup");
const fetchrole = require("./apis/fetchrole");
const userDetailBasedOnRole = require("./apis/info/userDetailBasedOnRole");

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
router.get("/apis/info/:role", asyncRoute(userDetailBasedOnRole));

module.exports = router;
