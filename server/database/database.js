const Sequelize = require('sequelize');
<<<<<<< HEAD
const db = new Sequelize('postgres://postgres:123@localhost:3030/Board-Manager',{logging: false});

=======
const db = new Sequelize('postgres://postgres:123@localhost:5432/Board-Manager',{logging: false});
>>>>>>> cd65be80d1165cda354c94c1cc18650383c23fd1
module.exports = db;