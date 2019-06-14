const router = require('express').Router();
const { Task } = require('../../database');


/*******************************************************
 * Getting state of tasks table
********************************************************/

router.get('/', async(req, res, next) =>{
  try{
    const allTasks = await Task.findAll();
    res.send(allTasks);
  } catch(error){
    console.log("Unable to get Tasks");
  }
});

router.get('/:taskId', async(req,res,next) =>{
  try{
    const task = await Task.findByPk(req.params.id);
    res.send(task);
  } catch(error){
    console.log(`Unable to get Task ${req.params.id}`);
  }
});


/*******************************************************
 *  Manipulating the state of the tasks table
********************************************************/

router.post('/', async(req,res,next) => {
  //STUB
});

router.put('/:taskId', async(req,res,next) =>{
    //STUB
});

router.delete('/:taskId', async(req,res,next) =>{
    //STUB
});

module.exports = router;