const db = require('../database');
const Sequelize = require('sequelize');

const UserBoard = db.define('userBoard', {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,

  },
  boardId: {
    type: Sequelize.INTEGER,
    allowNull: false,

  }
});

module.exports = UserBoard;