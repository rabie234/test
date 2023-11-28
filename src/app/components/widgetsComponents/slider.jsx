import React from 'react'

const Slider = ({data}) => {
  return (
    <div className=' py-3 px-2  flex flex-row justify-center text-center overflow-x-auto w-full'>
    {data.map((items)=>{
        return <div className='w-full h-full min-w-full'> <img className=' object-cover' src={`https://www.ishtari.com/image/${items.image}`}></img></div>
    })}
    </div>
  )
}

export default Slider