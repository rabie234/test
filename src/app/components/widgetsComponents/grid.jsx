import React from 'react'

const Grid = ({data}) => {
    console.log(data.length)
  return (
    <div className={` py-3 px-2 flex flex-row  w-full`}>
        {
    data.map((items)=>{

        return <div className='w-full h-full'> <img className=' object-cover w-full h-full' src={`https://www.ishtari.com/image/${items.image}`}/></div>
    })
}
    </div>
  )
}

export default Grid