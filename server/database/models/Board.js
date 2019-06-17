const db = require('../database');
const Sequelize = require('sequelize');

const Board = db.define('boards', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  desc: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO22QbXJZv1JNpTKYHiImzhHxSGl4UK_DKPkil5v8kg98FndtZSQ'
  }
});

module.exports = Board;