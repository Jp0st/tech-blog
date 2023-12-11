const seedComments = require("./comment-seeds");
const seedPosts = require("./post-seeds");
const seedUsers = require("./user-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("\n---- DATABASE SYNCED ----\n");

    await seedUsers();
    console.log("\n---- USERS SEEDED ----\n");

    await seedPosts();
    console.log("\n---- POSTS SEEDED ----\n");

    await seedComments();
    console.log("\n---- COMMENTS SEEDED ----\n");
  } catch (error) {
    console.error("Error seeding database: ", error);
  }

  process.exit(0);
};

seedAll();