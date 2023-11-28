import React from 'react'

const Slider = ({data}) => {
  return (
    <div className=' flex flex-row justify-center text-center overflow-x-auto w-full'>
    {data.map((items)=>{
        return <img src={`https://www.ishtari.com/image/${items.image}`}></img>
    })}
    </div>
  )
}

export default Slider