const express = require("express")
const route = express.Router();

//import controller
const {createTodo,updateTodo} = require("../controller/createTodo");
const {getTodos,getTodoById} = require("../controller/getTodo");
const { deleteTodo } = require("../controller/deleteTodo");


//define Api Route
route.post('/createTodo',createTodo);
route.get('/getTodos',getTodos);
route.get('/getTodo/:id',getTodoById);
route.put('/updateTodo/:id',updateTodo)
route.delete('/deleteTodo/:id',deleteTodo)

module.exports = route;