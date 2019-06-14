const db = require('./database');
//const Board = require('./models/Board');
//const User = require('./models/User');
const Task = require('./models/Task');

//Setting up relations
/*
User.hasMany(Board);
Board.hasMany(User);

Task.belongsTo(Board);
Board.hasMany(User);

Task.belongsTo(User);
User.hasMany(Task);
*/

module.exports = {db, Task};