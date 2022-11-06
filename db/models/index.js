const { Sequelize, DataTypes } = require("sequelize");

//Connect DB
const sequelize = new Sequelize("next_demo", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

//Check connection
const checkConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
// checkConnection()

const createUser = async () => {
  const newUser = await User.create({
    firstName: "Hoang",
    lastName: "Phan",
  });
};
// createUser();

//Sync with DB
const syncModels = async () => {
  await sequelize.sync({ force: true }); //delete old table, create new table
  // await sequelize.sync({ force: true }); edit old table
  console.log("All models were synchronized successfully.");
};
// syncModels();

module.exports = {
  DataTypes,
  sequelize
}