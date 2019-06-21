const Sequelize = require('sequelize');

const db = new Sequelize({
  connectionString:
    process.env.DATABASE_URL || 'postgres://postgres:123@localhost:3030/Board-Manager',
    logging: false,
    ssl: true,
    dialect: 'postgres'
});

//const db = new Sequelize('postgres://postgres:123@localhost:3030/Board-Manager',{logging: false});

module.exports = db;