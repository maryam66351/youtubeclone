
import { IoHomeSharp } from "react-icons/io5";
import { SiYoutubegaming } from "react-icons/si";
import { FaCarSide } from "react-icons/fa";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { MdOutlineSportsBasketball, MdLibraryMusic } from "react-icons/md";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { GrTechnology } from "react-icons/gr";
import { LiaBlogSolid } from "react-icons/lia";


function Sidebar({shrink, category, setCategory}) {
   
    return (
        <>

            <div className={`w-[225px] fixed h-[calc(100vh-50px)] pt-4 pl-5 ${shrink ? 'nav-shrink' : ''}`}>
               
                <div className={`flex items-center gap-5 min-w-[100px] ${category===0?"actv":""}`} onClick={()=>setCategory(0)} >
                    <IoHomeSharp className='text-[25px] text-gray-500 icon' />
                    <p className='text-[20px] text-gray-500 font-medium'>Home</p>
                </div>
                <div className={`flex items-center gap-5 pt-4 min-w-[140px] ${category===20?"actv":""} `} onClick={()=>setCategory(20)} >
                    <SiYoutubegaming className='text-[25px] text-gray-500 icon' />
                    <p className='text-[20px] text-gray-500 font-medium'>Gaming</p>
                </div>
                <div className={`flex items-center gap-5 pt-4 min-w-[200px] ${category===2?"actv":""}`} onClick={()=>setCategory(2)} >
                    <FaCarSide className='text-[25px] text-gray-500 icon' />
                    <p className='text-[20px] text-gray-500 font-medium'>Automobiles</p>
                </div>
                <div className={`flex items-center gap-5 pt-4 min-w-[120px] ${category===17?"actv":""}`} onClick={()=>setCategory(17)} >
                    <MdOutlineSportsBasketball className='text-[25px] text-gray-500 icon' />
                    <p className='text-[20px] text-gray-500 font-medium'>Sports</p>
                </div>
                <div className={`flex items-center gap-5 pt-4 min-w-[250px] ${category===24?"actv":""}`} onClick={()=>setCategory(24)} >
                    <PiTelevisionSimpleFill className='text-[25px] text-gray-500 icon' />
                    <p className='text-[20px] text-gray-500 font-medium'>Entertainment</p>
                </div>
                <div className={`flex items-center gap-5 pt-4 min-w-[200px] ${category===28?"actv":""}`} onClick={()=>setCategory(28)} >
                    <GrTechnology className='text-[25px] text-gray-500 icon' />
                    <p className='text-[20px] text-gray-500 font-medium'>Technology</p>
                </div>
                <div className={`flex items-center gap-5 pt-4 min-w-[100px] ${category===10?"actv":""}`} onClick={()=>setCategory(10)} >
                    <MdLibraryMusic className='text-[25px] text-gray-500 icon' />
                    <p className='text-[20px] text-gray-500 font-medium'>Music</p>
                </div>
                <div className={`flex items-center gap-5 pt-4 min-w-[100px] ${category===22?"actv":""}`} onClick={()=>setCategory(22)} >
                    <LiaBlogSolid className='text-[25px] text-gray-500 icon' />
                    <p className='text-[20px] text-gray-500 font-medium'>Blogs</p>
                </div>
                <div className={`flex items-center gap-5 pt-4 min-w-[100px] ${category===25?"actv":""}`} onClick={()=>setCategory(25)} >
                    <HiOutlineNewspaper className='text-[25px] text-gray-500 icon' />
                    <p className='text-[20px] text-gray-500 font-medium'>News</p>
                </div>
                <hr className='mt-5 mb-5' />
                <h6 className='text-gray-500 font-medium mb-3'>Subscribed</h6>
                <div className='flex items-center gap-5 pt-2' >
                    <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-7 h-7 object-cover rounded-full min-w-[25px]' />
                    <p className='text-[20px] text-gray-500 font-medium whitespace-nowrap'>PiwDiePie</p>
                </div>
                <div className='flex items-center gap-5 pt-2' >
                    <img src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-7 h-7 object-cover rounded-full min-w-[25px]' />
                    <p className='text-[20px] text-gray-500 font-medium whitespace-nowrap'>5-Min Craft</p>
                </div>
                <div className='flex items-center gap-5 pt-2' >
                    <img src='https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='w-7 h-7 object-cover rounded-full min-w-[25px]' />
                    <p className='text-[20px] text-gray-500 font-medium whitespace-nowrap'>Nas daily</p>
                </div>



            </div>




        </>
    )
}

export default Sidebar