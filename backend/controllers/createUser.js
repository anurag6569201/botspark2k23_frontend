const mongoose = require("mongoose");
const User = require("../db/schema/user");

const createUser = async (req, res, next) => {
  const { name, email, phone, bloodGrp, collegeName } = req.body;

  const newUser = new User({
    name,
    email,
    phone,
    bloodGrp,
    collegeName,
    sessionID: "ID",
  });

  try {
    const saveUser = await newUser.save();
    console.log(saveUser);
    res.write(JSON.stringify(saveUser));
    res.end();
  } catch (e) {
    console.log("Error occured at createUser.js :: ", e.message);
    res.send("Err");
  }
};

module.exports = createUser;
