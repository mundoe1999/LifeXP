const express = require('express');
const path = require('path');
const api  = require('./api');
const boards = require('./api/routes/boards');
const users = require('./api/routes/users');
const tasks = require('./api/routes/tasks');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');
const {db} = require('./database');
const bodyParser = require('body-parser');
const {User} = require('./database');

const app = express();
app.set('port', process.env.PORT || 3000);

// Logging middleware
app.use(morgan('dev'))

// Body parsing middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Session middleware
app.use(session({
  secret: 'This is not a very secure secret...',
  resave: false,
  saveUninitialized: false
}))

// Session middleware
app.use(session({
  secret: 'This is not a very secure secret...',
  resave: false,
  saveUninitialized: false
}))

// consumes 'req.session' so that passport can know what's on the session
app.use(passport.initialize())

// this will invoke our registered 'deserializeUser' method
// and attempt to put our user on 'req.user'
app.use(passport.session())

// after we find or create a user, we 'serialize' our user on the session
passport.serializeUser((user, done) => {
  return done(null, user.id)
})

// If we've serialized the user on our session with an id, we look it up here
// and attach it as 'req.user'.
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id)
    return done(null, user)
  } catch (err) {
    return done(err)
  }
})

// Static middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

// authentication router
app.use('/auth', require('./auth'))

// Setting up routing
app.use(bodyParser.json());
app.use('/api', require('./api'));

// For all GET requests that aren't to an API route,
// we will send the index.html!
app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'))
})

// Handle 404s
//app.use((req, res, next) => {
//  const err = new Error('Not Found')
//  err.status = 404
//  next(err)
//})

// Error handling endware
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send(err.message || 'Internal server error')
})

if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', api.routes.index);
app.get('/users', users.list);
app.get('/boards', boards.list);
app.get('/tasks', tasks.list);

db.sequelize.sync().then(function() {
  http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
  });
});