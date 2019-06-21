const router = require('express').Router()
const {User} = require('./database/')
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
module.exports = router

router.use('/google', require('./oauth'))

router.get('/me', (req, res, next) => {
  res.json(req.user || {})
})

router.put('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
        password: req.body.password
      }
    });

    if (user) {
      //var token = jwt.sign(user, "MIGqAgEAAiEAty+An5KUJYsjhnwBfkx1NdPkQLnhncnFdkUH0gfl+VMCAwEAAQIhAJcCt9vUMACLJSwWSfzd9riUjdajKKqh2AAcp9lQAztxAhEA7NTjChhmfFLZXkU0sQwERQIRAMYDFAb+834lhyE7pPzf/LcCECTe49XfhJ0YXOTzS0fBAi0CEDlaDuTv10rER91iTylHHwUCEBoZFC1PjjKDECD/7FKfLlk=");
      req.login(user, (err) => err ? next(err) : res.json(user))
    } else {
      const err = new Error('Incorrect username or password!')
      err.status = 401
      throw err
    }
  } catch (err) {
    next(err)
  }
})

router.delete('/logout', (req, res, next) => {
  req.logout()
  req.session.destroy((err) => {
    if (err) return next(err)
    res.status(204).end()
  })
})
