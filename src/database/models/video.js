module.exports = (sequelize, DataTypes) => {
  const Video = sequelize.define('Video', {
    videoTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    videoDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    videoUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Video;
};