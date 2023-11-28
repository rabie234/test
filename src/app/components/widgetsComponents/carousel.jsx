import React from 'react'

const Carousel = ({data}) => {
  return (
    <div className='flex py-3 px-2  flex-row overflow-x-scroll w-full'>
        {data.map((item)=>{
            return (<div className='w-[200px] aspect-auto'><img className=' object-cover' src={item.thumb}></img></div>)
        })}
    </div>
  )
}

export default Carousel