const express = require("express");
const fetchUser = require("../controllers/fetchUser");
const Router = express.Router();

Router.post("/", fetchUser);

module.exports = Router;
