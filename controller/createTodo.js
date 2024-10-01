const Todo = require("../models/todo")

exports.createTodo = async(req,res)=>{
    try {
        //extract title and description from request body
        const{title,description} = req.body
        //create a new Todo Obj and insert in DB

        const response = await Todo.create({title,description});

        // send a json response with success flag

        res.status(200).json({
            success:true,
            data:response,
            msg:"Entry created successfully"
        })

    } catch (err) {
        console.log(err)
        console.error(err)
        res.status(500)
        .json({
            success:false,
            data:" internal server error",
            message:err.message,
        })
    }
}
    exports.updateTodo = async(req,res)=>
{
    try{
        //another way to fetch id
        const {id} = req.params;
        const {title,description}= req.body;

        const todo = await Todo.findByIdAndUpdate({_id:id},
            {title,description,updatedAt:Date.now()}
        )
        res.status(200).json({
            success:true,
            data:todo,
            msg:`data is updated for this id ${id}`
        })
        
    }catch{
        console.log(err)
        console.error(err)
        res.status(500)
        .json({
            success:false,
            data:" internal server error",
            message:err.message,
    })

    }
}
