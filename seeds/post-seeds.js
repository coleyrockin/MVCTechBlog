const { Post } = require("../models");

const postData = [
  {
    title: "Fear of spilling water on laptop",
    content: "I most have water while im working on my.....",
    user_id: 1,
  },
  {
    title: "Apple or Windows debate 7239",
    content: "So lets get to this topic...",
    user_id: 2,
  },
  {
    title: "Best VScode extensions",
    content:
      "Anybody know of any good, productive extensions to help me write code......",
    user_id: 3,
  },
  {
    title: "Where should i go to learn more about AWS?",
    content: "I want to........",
    user_id: 4,
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
