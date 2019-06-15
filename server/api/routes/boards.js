const router = require('express').Router();
const { Board } = require('../../database');

/*******************************************************
 * Getting state of board table
********************************************************/

router.get('/', async(req, res, next) =>{
  try{
    const allBoards = await Board.findAll();
    res.send(allBoards);
  } catch(error){
    console.log("Unable to get Boards");
  }
});

router.get('/:boardId', async(req,res,next) =>{
  try{
    const board = await Task.findByPk(req.params.boardId);
    res.send(board);
  } catch(error){
    console.log(`Unable to get Task ${req.params.boardId}`);
  }
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