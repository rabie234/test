"use client"; 


import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Dropdown() {
  return (
    <div >
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex  w-full justify-center rounded-md  px-4 py-2 text-sm font-medium text-black/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
          <div className='flex flex-row text-center align-middle  '>
          <svg
 className='pr-1 max-md:w-5 w-8'
 xmlns="http://www.w3.org/2000/svg"
 viewBox="0 0 20 20"
 fill="none"
>
 <rect width="20" height="6.66667" fill="#ED1C24" />
 <rect y="13.3333" width="20" height="6.66667" fill="#ED1C24" />


 <rect y="6.66667" width="20" height="6.66667" fill="#FFFFFF" />
<circle cx="10" cy="10" r="1" fill="#228B22" />
 <path d="M10 8.33333V11.6667H8.33333V10H11.6667V8.33333H10Z" fill="#228B22" />
</svg>
            <h2 className=' max-md:hidden text-lg font-[400]'>Lebanon</h2>
          
         
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className=" z-50 absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
           
       
          <div className="px-1 py-1">
           
           <Menu.Item>
             {({ active }) => (
               <button
                 className={`${
                   active ? 'bg-[#BF1E2E] text-white' : 'text-gray-900'
                 } group flex w-full items-center rounded-md px-2 py-2 text-lg`}
               >
                 {active ? (
                   <Option
                     className="mr-2 h-5 w-5"
                     aria-hidden="true"
                   />
                 ) : (
                   <Option
                     className="mr-2 h-5 w-5"
                     aria-hidden="true"
                   />
                 )}
                 Lebanon
               </button>
             )}
           </Menu.Item>
         </div>
         <div className="px-1 py-1">
           
           <Menu.Item>
             {({ active }) => (
               <button
                 className={`${
                   active ? 'bg-[#BF1E2E] text-white' : 'text-gray-900'
                 } group flex w-full items-center rounded-md px-2 py-2 text-lg`}
               >
                 {active ? (
                   <Option
                     className="mr-2 h-5 w-5"
                     aria-hidden="true"
                   />
                 ) : (
                   <Option
                     className="mr-2 h-5 w-5"
                     aria-hidden="true"
                   />
                 )}
                 Lebanon
               </button>
             )}
           </Menu.Item>
         </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

function Option(props) {
  return (
    <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="none"
  >
    <rect width="20" height="6.66667" fill="#ED1C24" />
    <rect y="13.3333" width="20" height="6.66667" fill="#ED1C24" />
  
   
    <rect y="6.66667" width="20" height="6.66667" fill="#FFFFFF" />
  <circle cx="10" cy="10" r="1" fill="#228B22" />
    <path d="M10 8.33333V11.6667H8.33333V10H11.6667V8.33333H10Z" fill="#228B22" />
  </svg>
  )
}
