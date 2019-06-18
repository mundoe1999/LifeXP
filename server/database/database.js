const Sequelize = require('sequelize');
const db = new Sequelize('postgres://postgres:123@localhost:5432/Board-Manager',{logging: false});
module.exports = db;