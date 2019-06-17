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
<<<<<<< HEAD
    allowNull: true,
    defaultValue: 1
=======
    defaultValue: '1'
>>>>>>> 63f05a2b24e41fcb9ceb9a8156d556a4582759f4
  }
});

module.exports = User;
