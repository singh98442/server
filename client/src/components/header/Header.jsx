import React from 'react'
import './Header.scss'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../feature/slices/HeaderSlice'
import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'

const Header = () => {
    let islogin = useSelector(state => state.auth.isLoggin);

    const dispatch = useDispatch()
    // const navigate = useNavigate()

    // const handleLogout = () => {
    //     dispatch(logout())
    //     navigate("/login")

    // }

    return (
        <div className='header w-[100%] h-[60px] bg-gray-500 text-white flex items-center sticky top-0'>
            <div className="wrapper flex w-[100%] justify-between ml-[1rem] mr-[1rem] items-center">
                <div className="left flex items-center gap-4">
                    <h2 className=' text font-bold text-[1.5rem]'>BEST BLOG</h2>
                    <button className=' text-[1.5rem] italic underline'>All Blogs</button>

                    {
                    islogin && <button className=' text-[1.5rem] italic underline'><Link to={"/yourblog"}>Yours Blogs</Link></button>
                    }
                    {
                    islogin && <button className=' text-[1.5rem] italic underline'><Link to={"/adduserblog"}>Add Blog</Link></button>
                    }
                </div>
                <div className="right flex gap-5 items-center">
                    {!islogin && <>
                        <button className=' text-center cursor-pointer text-[1.5rem] bg-amber-400 rounded-[15px] px-[15px]'><Link to={"/signup"}>Signup</Link></button>
                        <button className=' text-center cursor-pointer text-[1.5rem] bg-amber-400 rounded-[15px] px-[15px]'><Link to={"/login"}>Login</Link></button>
                    </>}
                    {islogin && <button className=' text-center cursor-pointer text-[1.5rem] bg-amber-400 rounded-[15px] px-[15px]' onClick={()=>dispatch(logout())}>Logout</button>}
                </div>
            </div>

        </div>
    )
}

export default Header
