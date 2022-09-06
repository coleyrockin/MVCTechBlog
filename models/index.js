// import our 3 models created in the other files
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
  // as foreign key to User
      foreignKey: 'user_id'
  });

Post.belongsTo(User, {
  foreignKey: 'user_id'
  });

// adds a foreign key and singular association mixins to the source
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Comment };
