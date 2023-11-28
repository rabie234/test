import React from 'react'
import { FaCartPlus } from "react-icons/fa";
const ProductCard = ({productInf}) => {
  return (
    <div key={productInf.productInf_id} className="group relative bg-white  ">
                  <div className="aspect-h-1 aspect-w-1 min-w-[150px] w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={productInf.thumb}
                      alt={productInf.thumb}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div className='px-1 flex flex-col'>
                      <h3 className="text-xs  leading-5 text-gray-700">
                        <a href=''>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {productInf.name}
                        </a>
                      </h3>
                      <h2 className=' font-bold'>{productInf.special}</h2>
                      <div className='flex flex-row justify-start text-center gap-3'><h3 className='text-xs text-gray-700 line-through'>{productInf.price}</h3><span className=' text-xs font-bold text-green-500'>{productInf.saving}% OFF</span> </div>
                      {/* <p className="mt-1 text-sm text-gray-500">{productInf.color}</p> */}
                   
                   <div className=' absolute bottom-3 bg-white justify-center right-4 grid items-center w-[40px] h-[30px] rounded-full shadow-lg border border-black  '>
                   <FaCartPlus />
                   </div>
                   
                    </div>
              
                  </div>
                </div>
  )
}

export default ProductCard