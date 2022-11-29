import React from 'react'
import { useUserBlogQuery } from '../../feature/slices/GetallBlock'

const AddBlog = () => {

    const userID = localStorage.getItem("userId")
    const { data } = useUserBlogQuery(`${userID}`)
    const resp = data?.blogs
    // const resp1 = resp?.blog
    // console.log(resp1)
    return (
        <div className=' flex justify-center flex-col items-center'>
            {resp?.map((data, index) => {
                return (
                    <>
                        <div className="wrapper flex justify-center items-center w-[50%] my-[1rem] shadow-lg gap-2" key={index} >
                            <div className="card w-[100%] mx-[1rem] flex flex-col gap-2">
                                <h1 className=' font-bold uppercase text-gray-600'>{data.title}</h1>
                                <img className=' object-cover w-screen rounded' src={data.image} alt="" />
                                <p className=' font-medium text-gray-500 mb-2'>{data.description}</p>
                                {/* <p className=' italic font-light mb-[1rem]'>{data.name}</p> */}
                            </div>
                        </div>
                    </>
                )
            })}


        </div>
    )
}

export default AddBlog
