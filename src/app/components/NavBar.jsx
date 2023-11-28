import React from 'react'

function NavBar() {
  return (
    <>
      <div className='flex flex-row py-3 px-2  max-md:flex-col max-md:fixed max-md:left-[-100%]'>
            <div className='px-3 border-l text-lg font-[300] border-gray-500/30'>
                <a href=''>  Home & Kitchen</a>
            </div>
            <div className='px-3 border-l text-lg font-[300] border-gray-500/30'>
                    <a href=''>  Home & Kitchen</a>
            </div>
            <div className='px-3 border-l text-lg font-[300] border-gray-500/30'>
                    <a href=''>  Home & Kitchen</a>
            </div>
            <div className='px-3 border-l text-lg font-[300] border-gray-500/30'>
                    <a href=''>  Home & Kitchen</a>
            </div>
      </div>
    </>
  )
}

export default NavBar
