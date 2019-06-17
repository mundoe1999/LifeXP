const router = require('express').Router();
const { Task } = require('../../database');


/*******************************************************
 * Getting state of tasks table
********************************************************/

router.get('/', async(req, res, next) =>{
  try{
    const allTasks = await Task.findAll();
    res.send(allTasks);
    console.log("Request Successful");
  } catch(error){
    console.log(error);
  }
});

router.get('/:taskId', async(req,res,next) =>{
  try{
    const task = await Task.findByPk(req.params.taskId);
    res.send(task);
  } catch(error){
    console.log(`Unable to get Task ${req.params.taskId}`);
  }
});


/*******************************************************
 *  Manipulating the state of the tasks table
********************************************************/

router.post('/', async(req,res,next) => {
  try{
    /*
    Alternate implementation
    let b_name = req.body.name;
    let b_desc = null || req.body.desc;
    let b_stat = null || req.body.status;
    let b_diff = req.body.difficulty;
    let b_boId = req.body.boardId;
    let b_usId = null || req.body.userId;
  */

    const newTask = await Task.create(req.body);
     res.send(newTask);
     console.log('Task has been successfully created!');
  }

  catch(error){
    next(error);
  }

});

router.put('/:taskId', async(req,res,next) =>{
  try{
    console.log(req.body);
    const newTask = await Task.update(req.body, {where: {id: req.params.taskId}});
     res.send(newTask);
     console.log(`Task ${req.params.taskId} updated!`);

  }
  catch(error){
    next(error);
  }
});

router.delete('/:taskId', async(req,res,next) =>{
    try{
      await Task.destroy({
        where: {
          id: req.params.taskId
        }
      });
      res.send(`Successfully deleted task ${req.params.taskId}`);
      console.log(`Successfully deleted task ${req.params.taskId}!`);
    }
    catch(error){
      console.log(error);
    }
});

module.exports = router;