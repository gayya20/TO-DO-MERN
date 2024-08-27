const {Router} = require('express');
const { getToDos, saveToDo, updateToDo, deleteToDo } = require('../controllers/ToDoController');
const router=Router();


router.get('/',getToDos)
router.post('/save',saveToDo)
router.post('/update',updateToDo)
router.post('/delete',deleteToDo)




module.exports=router;