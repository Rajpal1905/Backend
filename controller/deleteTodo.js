const Todo = require('../models/todo')

exports.deleteTodo = async (req,res)=>{
    try {
        const {id} = req.params
        const todo = await Todo.findByIdAndDelete({_id:id})

        if(!todo){
            res.status(404).json({
                success:false,
                msg:"id not found in Db"
            })
        }
        res.status(200).json({
            status:true,
            msg:"mission completed"
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