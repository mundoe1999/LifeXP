const router = require('express').Router();
const { User, Task, Board, UserBoard} = require('../../database');

/*******************************************************
 * Getting state of user table
********************************************************/

router.get('/', async(req, res, next) =>{
  try{
    const allUsers = await User.findAll();
    res.send(allUsers);
  } catch(error){
    console.log(error);
    console.log("Unable to get Users");
  }
});

router.get('/:userId', async(req,res,next) =>{
  try{

    const user = await User.findAll({
      where: {id: req.params.userId}
    })
    res.send(user);
  } catch(error){
    console.log(`Unable to get User ${req.params.userId}`);
    console.log(error);
  }
});

router.get('/:userId/tasks', async(req,res,next) =>{
  try{
    const allTasksFromUser = await Task.findAll({
      where: {
        userId: req.params.userId
      }
    });
    res.send(allTasksFromUser);
  } catch(error){
    console.log(`Unable to get User ${req.params.userId}'s Tasks`);
  }

});

router.get('/:userId/boards', async(req,res,next) =>{
  
  try{
    const user = await User.findOne({
      where: {id: req.params.userId}
    })
    console.log(user);
    let boards = await user.getBoards();
    res.send(boards);
  } catch(error){
    console.log(`Unable to get User ${req.params.userId}'s Boards`);
    console.log(error);
  }
  
});

/*******************************************************
 *  Manipulating the state of the user table
********************************************************/

router.post('/', async(req,res,next) => {
  try{
    const newUser = await User.create(req.body);
    res.send(newUser);
    console.log("User has been successfully created!");
  }catch(error){
    console.log(error);
  }
});

router.put('/:userId', async(req,res,next) =>{
  try{
    const updatedUser = await User.update(req.body, {where: {id: req.params.userId}});
    res.send(updatedUser);
    console.log(`User ${req.params.userId} updated!`);
  } catch(error){
    next(error);
  }
});

router.put('/:userId/add/:boardId', async(req,res,next) =>{
  try{
    const foundUser = await User.findOne({where: {id: req.params.userId}});
    const foundBoard = await Board.findOne({where: {id: req.params.boardId}});
    let smth = foundBoard.addUser(foundUser);
    res.send(smth);
    console.log(`User ${req.params.userId} added to ${req.params.boardId}!`);
  } catch(error){
    next(error);
  }
});

router.delete('/:userId', async(req,res,next) =>{
  try{
   //await Task.update({userId: null},{where:{userId:req.params.userId}});
    /*
    await User.destroy({
      where: {
        id: req.params.userId
      }
    });
    */
    
    //res.send("Have ended this user's life");
    console.log(`Successfully deleted User ${req.params.userId}`);
  } catch(error) {
    console.log(error);
  }
});

module.exports = router;