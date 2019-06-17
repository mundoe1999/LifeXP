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
<<<<<<< HEAD
    defaultValue: 'EASY'
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
=======
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
>>>>>>> 63f05a2b24e41fcb9ceb9a8156d556a4582759f4
  }
});

module.exports = Task;
