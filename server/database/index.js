const db = require('./database');
const Board = require('./models/Board');
const User = require('./models/User');
const Task = require('./models/Task');
const UserBoard = require('./models/UserBoard')

//Setting up relations

/*
<<<<<<< HEAD
Task.belongsTo(User);

User.hasMany(Task);
User.belongsTo(Board);

Board.hasMany(User);
*/

module.exports = {db, Task, User, Board};
=======
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

User.belongsToMany(Board, {as: 'boards', through: 'userBoards'});
Board.belongsToMany(User, {as: 'users', through: 'userBoards'});

Task.belongsTo(Board);
User.hasMany(Task);
/*
Task.belongsTo(Board);


Board.hasMany(Task);

*/

module.exports = {db, Task, User, Board, UserBoard};
>>>>>>> 63f05a2b24e41fcb9ceb9a8156d556a4582759f4
