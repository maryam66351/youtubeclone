import React from 'react'
import { CiMenuFries, CiSearch } from "react-icons/ci";
import { ImYoutube2 } from "react-icons/im";
import { MdEmergencyRecording } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { Link } from 'react-router-dom';



function Navbar({setshrink}) {
    return (
        <div className='sticky top-0'>
            <div className=' bg-white flex justify-between items-center pr-10 pl-4 shadow-md'>
                <div className='flex items-center gap-5'>
                    <CiMenuFries className='text-[30px] cursor-pointer' onClick={()=>setshrink(prev => !prev)} />
                   <Link to="/"><ImYoutube2 className='text-[50px] cursor-pointer text-red-500' /> </Link>
                </div>
                <div className='flex w-[35vw] border-[2px] items-center rounded-full px-5 py-1 justify-between'>
                    <input className='w-full outline-none border-black border-0' type="text" placeholder='Search' />
                    <CiSearch className='text-[20px] cursor-pointer' />
                </div>
                <div className='flex gap-5'>
                    <MdEmergencyRecording  className='text-[25px] cursor-pointer' />
                    <FaBell  className='text-[25px] cursor-pointer' />
                    <img className='w-7 rounded-full cursor-pointer' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>

            </div>






        </div>
    )
}

export default Navbar