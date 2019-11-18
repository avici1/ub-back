/* eslint-disable no-unused-vars */

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Blogs', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    blogTitle: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    blogDescription: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    blogPost: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    blogPic: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Blogs'),
};
