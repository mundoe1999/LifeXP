const router = require('express').Router();

// routings
router.use('/tasks', require('./routes/tasks'));
router.use('/users', require('./routes/users'));
router.use('/boards', require('./routes/boards'));

router.use('/', function(req,res,next){
  res.send('API ROUTING');

});

module.exports = router;