const { Comment } = require("../models/Index");

const commentData = [
  {
    comment_text: "I could not agree more!",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: "This is super helpful thank you!",
    user_id: 4,
    post_id: 2,
  },
  {
    comment_text: "I can't focus when there is music playing.",
    user_id: 5,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;
