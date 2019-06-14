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
  level: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'EASY'
  }
});

module.exports = Task;
