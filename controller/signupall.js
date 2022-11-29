import User from "../model/User.js"
import bcrypt from 'bcryptjs'

export const signupall = async(req,res)=>{
    const {name, email,password} =  req.body;

    let existing_user;

    try {
          existing_user =await User.findOne({email})
        
    } catch (error) {
       return console.log("failed to find the user in the database")
        
    }

    if( existing_user){
       return res.status(400).json({message: "user already exists"})
    }

    const hassPassword= bcrypt.hashSync(password)
    try {
        const new_users = new User({
            name,
            email,
            password : hassPassword,
            blogs: []
        })

       await new_users.save()
        return res.status(200).json({message : "sign_up  successfully"})
        
    } catch (error) {
        return res.status(400).json({message: error})
        
    }

}