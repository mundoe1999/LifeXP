const router = require('express').Router();

/*******************************************************
 * Getting state of user table
********************************************************/

router.get('/', async(req, res, next) =>{
    res.send('all Users');
});

router.get('/:userId', async(req,res,next) =>{
    res.send(`Selecting User ${req.params.userId}`)
});

router.get('/:userId/tasks', async(req,res,next) =>{
  res.send(`Selecting all tasks attached to ${req.params.userId}`)
});

router.get('/:userId/boards', async(req,res,next) =>{
  res.send(`Selecting all boards attached to ${req.params.userId}`)
});

/*******************************************************
 *  Manipulating the state of the user table
********************************************************/

router.post('/', async(req,res,next) => {
  //STUB
});

router.put('/:userId', async(req,res,next) =>{
    //STUB
});

router.delete('/:userId', async(req,res,next) =>{
    //STUB
});

module.exports = router;