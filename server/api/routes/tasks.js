const router = require('express').Router();

router.get('/', async(req, res, next) =>{
    res.send('all tasks');
});
router.get('/:userId', async(req, res, next) =>{
    res.send(`Tasks from ${req.params.userId}`);
});

module.exports = router;