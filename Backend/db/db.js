import mongoose from "mongoose";
import dotenv from "dotenv";

// DB Connecting File

dotenv.config();
const connectToMongoDB =async  ()=>{
    try{
        await mongoose.connect(process.env.Mongo_URL);
        console.log("Db Connection SucessFull");    
    } catch(error){
        console.log("Error Conecting", error.message)
    }
};

export default connectToMongoDB;