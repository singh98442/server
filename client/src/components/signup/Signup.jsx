import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSignupUserMutation } from '../../feature/slices/GetallBlock'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

    const navigate = useNavigate();

    const [signupData, response] = useSignupUserMutation();

    const [inputs, setInput] = useState({
        name: "",
        email: "",
        password: ""
    })

    const inputHandle = (e) => {
        setInput((prevstate) => ({
            ...prevstate,
            [e.target.name]: e.target.value,
        }))
    }
    const submitHandle = (e) => {
        e.preventDefault();
        signupData(inputs);

    }
    const respdata = response?.data
    const finalResponse = respdata?.message
    // console.log(finalResponse)
    setInterval(() => {
        if (finalResponse) {
            navigate("/login")
        }
        // navigate("/login")

    }, 1000);


    return (
        <div className=' flex justify-center items-center h-[80vh]'>
            <div className="wrapper flex flex-col shadow-lg justify-end items-center w-[30%] gap-4">
                <h2 className=' font-bold text-green-600'>Sign_up</h2>
                <div className="">
                    <form className=' flex flex-col gap-4' onSubmit={submitHandle} >
                        <input className=' outline-none w-[120%] shadow-md rounded text-lg py-[5px]' name='name' value={inputs.name} type="text" onChange={inputHandle} placeholder='enter your full name' />
                        <input className=' outline-none w-[120%] shadow-md rounded text-lg py-[5px]' name='email' value={inputs.email} type="email" onChange={inputHandle} placeholder='enter email' />
                        <input className=' outline-none w-[120%] shadow-md rounded text-lg py-[5px]' name='password' value={inputs.password} type="password" onChange={inputHandle} placeholder='enter password' />
                        <button className=' text-white bg-orange-400 rounded-lg text-lg uppercase' type='submit'>submit</button>
                    </form>
                    <h3 className=' text-green-500 my-2'>{finalResponse}</h3>
                    <h4 className='my-[1rem] uppercase text-orange-400 italic cursor-pointer' ><Link to="/login">go to login</Link></h4>
                </div>
            </div>

        </div>
    )
}

export default Signup
