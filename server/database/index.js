const db = require('./database');
const Board = require('./models/Board');
const User = require('./models/User');
const Task = require('./models/Task');
const UserBoard = require('./models/UserBoard')

//Setting up relations

User.belongsToMany(Board, {as: 'boards', through: 'userBoards'});
Board.belongsToMany(User, {as: 'users', through: 'userBoards'});

Task.belongsTo(Board);
Board.hasMany(Task);

User.hasMany(Task);


module.exports = {db, Task, User, Board, UserBoard};