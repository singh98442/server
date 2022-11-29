import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
import { useGetallBlogQuery } from '../../feature/slices/GetallBlock'

const Card = () => {


  const { data } = useGetallBlogQuery();

  const allblogs = data?.blogs
  // console.log(allblogs)





  return (
    <>

      <div className='maincard flex flex-col justify-center items-center mt-[1rem]'>
        {allblogs?.map((blgs, index) => (
          <div className="wrapper flex justify-center items-center w-[50%] my-[1rem] shadow-lg gap-2" key={index}>
            <div className="card w-[100%] mx-[1rem] flex flex-col gap-2">
              <h1 className=' font-bold uppercase text-gray-600'>{blgs.title}</h1>
              <img className=' object-cover w-screen rounded' src={blgs.image} alt="" />
              <p className=' font-medium text-gray-500'>{blgs.description}</p>
              <p className=' italic font-light mb-[1rem]'>{blgs.user.name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Card
