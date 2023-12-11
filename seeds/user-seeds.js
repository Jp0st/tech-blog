const { User } = require("../models/Index");

const userData = [
  {
    username: "Code_Monkey123",
    password: "bananas",
  },
  {
    username: "WebDevHead",
    password: "fullstackcode",
  },
  {
    username: "NotACoder",
    password: "password123",
  },
  {
    username: "Mr_Coder_Man",
    password: "iliketocode",
  },
  {
    username: "The_Real_Apple_Genius",
    password: "apples",
  },
];

const seedUsers = () =>
  User.bulkCreate(userData, {
    individualHooks: true, // Use individual hooks for each user (e.g., hashing passwords).
    returning: true, // Return the created user data.
  });

module.exports = seedUsers;