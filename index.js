const express = require("express")
const app = express();

require('dotenv').config();

PORT = process.env.PORT || 8000;

app.use(express.json())
//import routes for todo API
const todoRoutes = require("./routes/todos")

//mount the todo Apis Routes
app.use('/api/v1',todoRoutes) 

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
})

//connect to the database

const dbConnect = require("./config/database");
dbConnect();

//defalut route

app.get('/',(req,res)=>{
    res.send(`<h1>This is home page </h1>`)
})