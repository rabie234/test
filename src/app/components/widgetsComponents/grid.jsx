import React from 'react'

const Grid = ({data}) => {
  return (
    <div className=' grid grid-cols-51overflow-scroll '>{
    data.map((items)=>{
        return <img src={`https://www.ishtari.com/image/${items.image}`}></img>
    })
}
    </div>
  )
}

export default Grid