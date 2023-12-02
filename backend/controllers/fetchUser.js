const user = require("../db/schema/user");

const fetchUser = async (req, res, next) => {
  const { _id } = req.body;
  try {
    const foundUser = await user.findOne({ _id });
    if (!foundUser) {
      res.send("Err");
    } else {
      console.log(foundUser);
      res.json(foundUser);
      res.end();
    }
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = fetchUser;
