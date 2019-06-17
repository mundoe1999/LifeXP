const router = require('express').Router();

/*******************************************************
 * Getting state of board table
********************************************************/

router.get('/', async(req, res, next) =>{
    res.send('test');
});

router.get('/:boardId', async(req,res,next) =>{
    res.send(`Selecting User ${req.params.boardId}`)
});

router.get('/:boardId/tasks', async(req,res,next) =>{
  res.send(`Selecting all tasks attached to ${req.params.boardId}`)
});

router.get('/:boardId/users', async(req,res,next) =>{
  res.send(`Selecting all users attached to ${req.params.boardId}`)
});

/*******************************************************
 *  Manipulating the state of the board table
********************************************************/

router.post('/', async(req,res,next) => {
  //STUB
});

router.put('/:boardId', async(req,res,next) =>{
    //STUB
});

router.delete('/:boardId', async(req,res,next) =>{
    //STUB
});

module.exports = router;