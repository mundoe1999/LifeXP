const Sequelize = require('sequelize');
<<<<<<< HEAD
const db = new Sequelize({
  connectionString:
    process.env.DATABASE_URL || 'postgres://postgres:123@localhost:3030/Board-Manager'
}); 
=======
const db = new Sequelize('postgres://postgres:123@localhost:3030/Board-Manager',{logging: false});
>>>>>>> 5e31721f2435e3e8e5d863469a2d75d76c7c6010

module.exports = db;