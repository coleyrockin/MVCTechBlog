const { User } = require("../models");

const userData = [
  {
    username: "Acrobat",
    password: "ChickenWing",
  },
  {
    username: "JohnWells",
    password: "Appleeater100",
  },
  {
    username: "Boredape",
    password: "Ihatepasswords12",
  },
  {
    username: "Moonlooter17",
    password: "Moonisbadmmk9",
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
