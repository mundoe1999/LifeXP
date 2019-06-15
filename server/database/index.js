const db = require('./database');
const Board = require('./models/Board');
const User = require('./models/User');
const Task = require('./models/Task');

//Setting up relations
/*
Task.belongsTo(User);

User.hasMany(Task);
User.belongsTo(Board);

Board.hasMany(User);
*/

module.exports = {db, Task, User, Board};