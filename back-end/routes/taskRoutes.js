const express = require('express');
const router = express.Router();
const {getTasks, addTask, deleteTask, editTask} = require('../controllers/tasksController');
const validateToken = require('../middleware/validateTokenHandler');


router.use(validateToken)
router.route('/').get(getTasks).post(addTask);
router.route('/:id').put(editTask).delete(deleteTask);

module.exports = router;