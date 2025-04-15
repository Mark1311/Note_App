import mongoose from "mongoose";

const connectToMongoDB =async  ()=>{
    try{
        await mongoose.connect("mongodb+srv://bittukumar:fNbKGQy3%403tKZHy@cluster0.pqyx3hn.mongodb.net/");
        console.log("Db Connection SucessFull");    
    } catch(error){
        console.log("Error Conecting", error.message)
    }
};

export default connectToMongoDB;