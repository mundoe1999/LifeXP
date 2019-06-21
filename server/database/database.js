const Sequelize = require('sequelize');
const db = new Sequelize({
  connectionString:
    process.env.DATABASE_URL || 'postgres://postgres:123@localhost:3030/'
}); 

module.exports = db;