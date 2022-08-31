const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Looking for new Tech job.",
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: "Does anyone know how to work linux?",
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: "Is it DAYTA or DA TA",
    user_id: 3,
    post_id: 3
  },
  {
    comment_text: "I once ate an iphone",
    user_id: 4,
    post_id: 4
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
