import mongoose from "mongoose";


export const database = async(URL)=>{
  
    try {
       await mongoose.connect(URL,{useUnifiedTopology:true, useNewUrlParser:true})
        console.log("database connected successfully")
        
    } catch (error) {
        console.log(`failed to connect database ${error}`)
        
    }
}