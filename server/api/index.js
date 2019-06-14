const router = require('express').Router();

// routings
router.use('/tasks', require('./routes/tasks'));
router.use('/', function(req,res,next){
    res.send('API running');
});

module.exports = router;