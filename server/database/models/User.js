const db = require('../database');
const Sequelize = require('sequelize');

const User = db.define('users', {
  fname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKRsW4WE_L7W_VkeJ2YXQEotSsPGDXbwPDhe_anhDdtyehO6bSjw'
  },
  level: {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: 1
  }
});

module.exports = User;
