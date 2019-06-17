const router = require('express').Router();
const { User, Task, Board, UserBoard} = require('../../database');

/*
Board Table

"name": String
"desc": String, Optional
"image": String, Optional

*/

/*******************************************************
 * Getting state of board table
********************************************************/

router.get('/', async(req, res, next) =>{
  try{
    const allBoards = await Board.findAll();
    res.send(allBoards);
  }catch(error){
    console.log(error);
  }
});

router.get('/:boardId', async(req,res,next) =>{
  try{
    const board = await Board.findByPk(req.params.boardId);
    res.send(board);
    console.log(`Selecting Board ${req.params.boardId}`);
  }catch(error){
    console.log(error);
  }
    
});

router.get('/:boardId/tasks', async(req,res,next) =>{
  try{
    const tasks = await Task.findAll({where:{boardId: req.params.boardId}});
    res.send(tasks);
  } catch(error) {
    console.log(error)
  }

});

router.get('/:boardId/users', async(req,res,next) =>{
  try{
    const board = await Board.findByPk(req.params.boardId);
    const users = await board.getUsers();
    res.send(users);
  } catch(error) {
    console.log(error)
  }
});

/*******************************************************
 *  Manipulating the state of the board table
********************************************************/

router.post('/', async(req,res,next) => {
  try{
    const newBoard = await Board.create(req.body);
    res.send(newBoard);
    console.log('Board has been successfully created!')
  }catch(error){
    console.log(error);
  }
});

router.put('/:boardId', async(req,res,next) =>{
  try{
    const updatedBoard = await Board.update(req.body,{where:{id:req.params.boardId}});
    res.send(updatedBoard);
    console.log(`Board ${req.params.boardId} updated!`)
  }catch(error){
    console.log(error);
  }
});

router.delete('/:boardId', async(req,res,next) =>{
  try{

    //Delete Associations
    //Effectively removes users from board
    await UserBoard.destroy({
      where:{
        boardId:req.params.boardId
      }
    });

    //Delete tasks
    await Task.destroy({where:{boardId:req.params.boardId}});

    //Delete board
    await Board.destroy({where:{id:req.params.boardId}});
    res.send('Done!');
  }catch(error){
    next(error);
  }
});

module.exports = router;