// CREATING THE TABLE IN MYSQL
// Using an ORM here (sequelize)

module.exports = function (sequelize, DataTypes) {
  const Posts = sequelize.define("Posts", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Posts;
};
