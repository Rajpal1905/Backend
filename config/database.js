const mongoose = require("mongoose")

require("dotenv").config();

const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log("successfully connected")
    })
    .catch(()=>{
        console.log("some issue occurs in dbConnection")
        console.log(error.message);
        process.exit(1);
    })
}
// const dbConnect =  async () => {
//     try {
//       const conn =  await mongoose.connect(process.env.DATABASE_URL);
//     }
//     catch(error){
//                 console.log("some issue occurs in dbConnection")
//                 console.error(`Error: ${error.message}`);
//                 process.exit(1);
//             }
//   }
module.exports = dbConnect;
