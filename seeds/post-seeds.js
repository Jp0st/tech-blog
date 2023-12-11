const { Post } = require("../models");

const postData = [
  {
    title: "Why MVC is so important",
    content:
      "MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.",
    user_id: 1,
  },
  {
    title: "Authentication vs. Authorization",
    content:
      "There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the system. In simple terms, authentication is the process of verifying who you are, while authorization is the process of verifying what you have access to.",
    user_id: 2,
  },
  {
    title: "Do you code with music in the background or dead silence?",
    content:
      "I get more work done when listening to lofi beats.",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;