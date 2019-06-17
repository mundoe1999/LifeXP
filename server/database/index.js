const db = require('./database');
const Board = require('./models/Board');
const User = require('./models/User');
const Task = require('./models/Task');
//const UserBoard = require('./models/UserBoard')

//Setting up relations

/*
User.associate = (models) => {
  User.belongsToMany(models.Board, { 
    through: 'UserBoard',
    as: 'boards',
    foreignKey: 'userId'
  });
}

Board.associate = (models) => {
  Board.belongsToMany(models.User, {
    through: 'UserBoard',
    as: 'users',
    foreignKey: 'boardId'
  });
}
*/

User.belongsToMany(Board, {as: 'boards', through: 'userBoard'});
Board.belongsToMany(User, {as: 'users', through: 'userBoard'});

Task.belongsTo(Board);
User.hasMany(Task);
/*
Task.belongsTo(Board);


Board.hasMany(Task);

*/

module.exports = {db, Task, User, Board};