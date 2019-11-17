export default (sequelize, DataTypes) => {
  const Blogs = sequelize.define('Blogs', {
    blogTitle: DataTypes.STRING,
    blogDescription: DataTypes.STRING,
    blogPost: DataTypes.STRING,
    blogPic: DataTypes.STRING,
  }, {});
  return Blogs;
};
