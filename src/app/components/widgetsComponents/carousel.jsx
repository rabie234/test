import React from 'react'
import ProductCard from '../productCard'

const Carousel = ({data,name}) => {
    return (
        <div className="py-10">
          <div className="mx-auto">
          <h2 className="text-2xl my-9 font-bold tracking-tight text-gray-900">{name}</h2>
    
            <div className="flex flex-row overflow-x-auto w-full justify-start gap-3">
              {data.map((item) => (
               <ProductCard productInf={item}/>
              ))}
            </div>
          </div>
        </div>
      )
}

export default Carousel