
const Todo = require("../models/todo")

exports.getTodos = async (req,res)=>{
    try {
        // fetch all todo item from Db 
        const todo = await Todo.find()
        res.status(200).json({
            status:true,
            data:todo,
            msg:"fetch successfully"
        })

    } catch (error) {
        console.log(error)
        console.error(error)
        res.status(500)
        .json({
            success:false,
            data:" internal server error",
            message:err.message,
        })
    }
}
exports.getTodoById = async (req,res)=>{
    try {
        const id = req.params.id;
        const todo = await Todo.findById({_id:id});
        if(!todo)
        {
            res.status(404).json({
                status:true,
                msg:`data not found ${id}`
            })
        }
        res.status(200).json({
            status:true,
            data:todo,
            msg:`fetch successfully Todo ${id} successfully`
        })

    } catch (error) {
        console.log(error)
        console.error(error)
        res.status(500)
        .json({
            success:false,
            data:" internal server error",
            message:err.message,
        })
    }
}