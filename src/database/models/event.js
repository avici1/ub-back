module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    eventName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    eventDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    eventDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    eventImageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Event;
};