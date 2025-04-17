const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
const URL=process.env.MONGO_URL || "mongodb://localhost:27017/userappdb"
const dbConnect=async()=>{
    try{
       await mongoose.connect(URL);
       console.log('MONGODB Connected');
    }
    catch(err){
        console.log('DB Error:',err.message)
    } 
}
module.exports=dbConnect;