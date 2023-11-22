const express = require("express");
const createUser = require("../controllers/createUser");
const Router = express.Router();


Router.post("/",createUser);


module.exports = Router