const express = require('express');
<<<<<<< HEAD
const path = require('path')
const morgan = require('morgan')
const session = require('express-session')
const passport = require('passport')
const {db} = require('./database')
const bodyParser = require('body-parser')
const app = express()
const PORT = 8080

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
  done(null, user.id)
})

// If we've serialized the user on our session with an id, we look it up here
// and attach it as 'req.user'.
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id)
    done(null, user)
  } catch (err) {
    done(err)
  }
})

// Static middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

// authentication router
app.use('/auth', require('./auth'))
=======
const bodyParser = require('body-parser');
const {db} = require('./database');
const app = express();
const PORT=5000;


>>>>>>> cd65be80d1165cda354c94c1cc18650383c23fd1

// Setting up routing
app.use(bodyParser.json());
app.use('/api', require('./api'));

<<<<<<< HEAD
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



=======
app.listen(PORT, () => {
  console.log(`Server runnin on ${PORT}`);
})
>>>>>>> cd65be80d1165cda354c94c1cc18650383c23fd1
// Listener at port 8080
db.sync()
  .then(() => {
    app.listen(8080,() => console.log('Connected at 8080')); 
  });