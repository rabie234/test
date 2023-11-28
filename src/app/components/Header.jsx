import React from 'react'
import Dropdown from './dropdownLan'
import { HiOutlineUserCircle,HiOutlineShoppingCart,HiOutlineSearch,HiMenuAlt2  } from "react-icons/hi";
import NavBar from './NavBar';
const Header = () => {
   
  return (
    <>
    <div className='flex  flex-col'>
    <div className=' align-middle w-full text-center m-auto px-2 py-7  bg-[#FFFFFF] flex justify-between  flex-row '>
    <div className='   relative' style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
           <button className='hidden max-md:block'>
            <HiMenuAlt2 className=" text-[20px] text-[#5D616D]"/>
           </button>
           <div className='w-[160px] max-md:w-[100px]'>
            <img  className='hidden md:block  ml-2 h-full' src="https://www.ishtari.com/images/logo/logo-redd.png" alt="logo" />
            <img  className=' max-md:block hidden  ml-2 h-fit' src="https://www.ishtari.com/images/logo/logo-dblack2.png" alt="logo" />
            </div>

            </div>
            <div className=' max-lg:hidden w-[50%] h-12 px-3 py-1 bg-[#F4F4F4]'>
                <input className=' bg-transparent h-full w-full outline-none border-none' type="text" placeholder='What are you looking for?' />
            </div>
            <div className='flex  w-max flex-row justify-between text-right float-right align-baseline'>
               
            <div  className='hidden max-md:block border-r border-gray-500/30  align-middle text-center py-1 px-3 max-md:px-1    w-full text-lg font-bold '>
               < HiOutlineSearch className="w-10 text-2xl max-md:text-lg" /> 
              </div>

                <div className=' border-r border-gray-500/30'>
              <Dropdown/>
              </div>
             
              <div  className='max-md:hidden border-r border-gray-500/30  align-middle text-center py-1 px-3 flex flex-row  justify-center w-full text-lg font-bold '>
              <span > SingIn </span>  < HiOutlineUserCircle className="w-10 text-2xl max-md:text-lg" /> 
              </div>
              <div  className='  align-middle text-center py-1 px-3 flex flex-row  justify-center w-full  max-md:px-1 text-lg font-bold '>
             <span className='max-md:hidden'> Cart </span> < HiOutlineShoppingCart className="w-10 text-2xl max-md:text-lg" /> 
              </div>

            </div>
            </div>
            <NavBar />
            </div>
    </>
  )
}

export default Header
