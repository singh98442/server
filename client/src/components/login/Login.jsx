import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginUserMutation } from '../../feature/slices/GetallBlock'
import { login } from '../../feature/slices/HeaderSlice'
import { useDispatch } from 'react-redux'

const Login = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const [loginData, response] = useLoginUserMutation()

  const [loginInput, setLoginInput] = useState({
    email: "",
    password: ""
  })

  const loginHandle = (e) => {
    setLoginInput((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    loginData(loginInput);
  }
  const respmsg = response?.data?.message
  const userID = response?.data?.user?._id
  // console.log(respmsg)
  // console.log(userID)

  // if (respmsg) {

  //   setInterval(() => {
  //     navigate("/")
  //     dispatch(login())

  //   }, 1000);

  // }
  if(respmsg){
    navigate("/")
      dispatch(login())
      localStorage.setItem("userId",userID)
    
  }

  // setInterval(() => {
  //   navigate("/")



  // }, 1000);
  // console.log(response)
  // console.log(userID)
  // console.log(respmsg)

  return (
    <div className=' flex justify-center items-center h-[80vh]'>
      <div className="wrapper flex flex-col shadow-lg justify-end items-center w-[30%] gap-4">
        <h2 className=' font-bold text-green-600'>Login</h2>
        <div className="">
          <form className=' flex flex-col gap-4' onSubmit={handleSubmit} >
            <input className=' outline-none w-[120%] shadow-md rounded text-lg py-[5px]' name='email' value={loginInput.email} type="email" onChange={loginHandle} placeholder='enter email' />
            <input className=' outline-none w-[120%] shadow-md rounded text-lg py-[5px]' name='password' value={loginInput.password} type="password" onChange={loginHandle} placeholder='enter password' />
            <button className=' text-white bg-orange-400 rounded-lg text-lg uppercase' type='submit'>submit</button>
          </form>
          <h3 className=' text-green-500 my-2'>{respmsg}</h3>
          <h4 className='my-[1rem] uppercase text-orange-400 italic cursor-pointer' ><Link to="/signup">go to signu_up</Link></h4>
        </div>
      </div>

    </div>
  )
}

export default Login
