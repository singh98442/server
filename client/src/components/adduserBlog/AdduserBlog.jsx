import React, { useState } from 'react'
import { usePostUserBlogMutation } from '../../feature/slices/GetallBlock'

const AdduserBlog = () => {

    const[blogFunc, BlogResponse] = usePostUserBlogMutation()
    console.log(BlogResponse)

    const [blogInput, setblogInput] = useState({
        title: "",
        description: "",
        image: "",
        
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(blogInput)
        blogFunc(blogInput)

    }

    const handleOnchange = (e) => {

        setblogInput((prevstate)=>({
            ...prevstate,
            [e.target.name]: e.target.value,
            user : localStorage.getItem("userId")
        }))

    }

    return (
        <div className=' flex justify-center items-center h-[80vh]'>
            <div className="adduser shadow-lg h-[30rem] w-[60%]">
                <form className=' flex flex-col gap-8 m-[1.5rem]' onSubmit={handleSubmit} >
                    <input className=' outline-none w-[80%] shadow-md rounded text-lg py-[5px]' value={blogInput.title} onChange={handleOnchange} name="title" type="text" placeholder='Give title of the blog' />
                    <input className=' outline-none w-[80%] shadow-md rounded text-lg py-[5px]' value={blogInput.image} onChange={handleOnchange} name="image" type="text" placeholder='Enter URL of the image' />
                    <textarea className=' outline-none w-[80%] shadow-md rounded text-lg py-[5px] h-[10rem]' onChange={handleOnchange} name="description" value={blogInput.description} placeholder='give description the blog'></textarea>
                    <button className=' text-white bg-orange-400 rounded-lg text-lg uppercase w-[30%]' type='submit'>submit</button>
                </form>
            </div>


        </div>
    )
}

export default AdduserBlog
