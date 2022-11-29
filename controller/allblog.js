import mongoose from "mongoose";
import blog from "../model/Blog.js"
import User from "../model/User.js";

export const allblog = async (req, res) => {
    let blogs;

    try {

        blogs = await blog.find().populate('user')

    } catch (error) {
        return console.log("failed to find the blogs in the database")

    }
    if (!blogs) {
        return res.status(404).json({ message: "no blogs available in the database" })
    }
    return res.status(200).json({ blogs })
}

export const postblog = async (req, res) => {
    const { title, description, image, user } = req.body;

    let existinguser;
    try {

        existinguser = await User.findById(user)
        
    } catch (error) {
        return console.log(error)
        
    }

    if(!existinguser){
        return res.status(400).json({message: "user not available with this Id"})
    }
    const blogies = new blog({
        title, description, image, user
    })

    try {
       

        const session = await mongoose.startSession();
        session.startTransaction();
        await blogies.save({session})
        existinguser.blogs.push(blogies)
        await existinguser.save({session})
        await session.commitTransaction();



    } catch (error) {
        return console.log("failed to save blogs", error)

    }
    return res.status(200).json({blogies})
}


export const updateblog = async (req, res, next) => {
    const blogId = req.params.id;
    const { title, description } = req.body
    let updateBlog;

    try {
        updateBlog = await blog.findByIdAndUpdate(blogId, {
            title,
            description
        })
        return res.status(200).json({ updateBlog })

    } catch (error) {

        return console.log("failed to update blog", error)

    }
}

export const blogbyid = async (req, res) => {
    const id = req.params.id;
    let singleblog;

    try {
        singleblog = await blog.findById(id)
        if (!singleblog) {
            return res.status(404).json({ message: "blog not found" })
        }
        return res.status(200).json({ singleblog })

    } catch (error) {
        return console.log("failed to fetch the particular blog", error)

    }
}

export const deleteblog = async (req, res, next) => {
    const id = req.params.id;
    let delblog;

    try {
        delblog = await blog.findByIdAndRemove(id).populate("user");
        await blog.user.blogs.pull(delblog);
        await blog.user.save();
        if (!delblog) {
            return res.status(404).json({ message: "failed to delete blog by id" })
        }
        return res.status(200).json({ message: "deletion of block successful" })


    } catch (error) {
        return console.log("failed to delete blog", error)

    }
}

export const allblogsofuser =async (req,res,next)=>{
    let userblogs;
    const user_id = req.params.id; 

    try {

        userblogs = await User.findById(user_id).populate("blogs")
        
    } catch (error) {

        return console.log("failed to fetch user blogs",error)
        
    }
    if(!userblogs){
        return res.status(404).json({message: "failed to fetch the user blogs"})
    }

    return res.status(200).json(userblogs);


}