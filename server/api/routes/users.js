const router = require('express').Router();
const { User, Task, Board } = require('../../database');

/*******************************************************
 * Getting state of user table
********************************************************/

router.get('/', async(req, res, next) =>{
  try{
    const allUsers = await User.findAll();
    res.send(allUsers);
  } catch(error){
    console.log("Unable to get Users");
  }
});

router.get('/:userId', async(req,res,next) =>{
  try{
    const user = await User.findByPk(req.params.userId);
    res.send(user);
  } catch(error){
    console.log(`Unable to get User ${req.params.userId}`);
  }
});

router.get('/:userId/tasks', async(req,res,next) =>{
  try{
    const allTasksFromUser = Task.findAll({
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
  /*
  try{
    const allBoardsFromUser = Board.findAll({
      where: {
        userId: req.params.userId
      }
    });
    res.send(allTasksFromUser);
  } catch(error){
    console.log(`Unable to get User ${req.params.userId}'s Tasks`);
  }
  */
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