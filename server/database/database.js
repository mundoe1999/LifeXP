const Sequelize = require('sequelize');
const db = new Sequelize((process.env.DATABASE_URL || 'postgres://postgres:123@localhost:3030/Board-Manager')); 

module.exports = db;