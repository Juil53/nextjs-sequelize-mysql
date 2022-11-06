const { User } = require("../models/user.model.js");

//Get All Users
const getUserList = async () => {
  const users = await User.findAll();
  if (users) {
    return users;
  } else {
    return false;
  }
};

//Get User by Id
const getUserById = async (id) => {
  const user = await User.findOne({
    where: {
      id,
    },
  });
  if (user) {
    return user;
  } else {
    return false;
  }
};

module.exports = {
  getUserList,
  getUserById
};
