const db = require('../database');
const Sequelize = require('sequelize');

const Task = db.define('tasks', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  desc: {
    type: Sequelize.STRING,
    allowNull: true
  },
  status: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: 'NOTSTARTED'
  },
  difficulty: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'EASY'
  },
  boardId:{
    type: Sequelize.INTEGER,
    allowNull: false
  },
  userId:{
    type: Sequelize.INTEGER,
    allowNull: true
  }
});

module.exports = Task;
