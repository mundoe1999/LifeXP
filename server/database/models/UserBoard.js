const db = require('../database');
const Sequelize = require('sequelize');

const UserBoard = db.define('userBoard', {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'User',
      key: 'id'
    }
  },
  boardId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Board',
      key: 'id'
    }
  }
});

module.exports = UserBoard;