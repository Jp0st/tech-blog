const { Comment } = require("../models");

const commentData = [
  {
    comment: "I could not agree more!",
    user_id: 2,
    post_id: 1,
  },
  {
    comment: "This is super helpful thank you!",
    user_id: 4,
    post_id: 2,
  },
  {
    comment: "I can't focus when there is music playing.",
    user_id: 5,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;