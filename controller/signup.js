import User from "../model/User.js"
export const signup =async (req,res)=>{
    let users;
    try {

        users = await User.find()

        
    } catch (error) {

        console.log("failed to fetch user from database", error)
        
    }

    if(!users){
        res.status(404).json({message: "user not found in the database"})
    }else{
        res.status(200).json({users})
    }
}