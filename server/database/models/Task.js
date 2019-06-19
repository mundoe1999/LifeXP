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
    defaultValue: 'NOTSTARTED',
    validate: {
      isIn: [['NOTSTARTED','STARTED','COMPLETE']]
    }
  },
  difficulty: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'EASY',
    validate: {
      isIn: [['EASY', 'MEDIUM', 'HARD']]
    }
  },
  boardId:{
    type: Sequelize.INTEGER,
    allowNull: false
  },
  userId:{
    type: Sequelize.INTEGER,
    allowNull: true
  },
  color:{
    type: Sequelize.STRING,
    defaultValue: 'RED',
    validate: {
      isIn:[['RED','GREEN','BLUE','YELLOW','ORANGE']]
    }
  }
});

module.exports = Task;
