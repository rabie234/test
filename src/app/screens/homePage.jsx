'use client'
import React, { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFech'
import Slider from '../components/widgetsComponents/slider'
import Carousel from '../components/widgetsComponents/carousel'
import Banner from '../components/widgetsComponents/banner'
import Grid from '../components/widgetsComponents/grid'
const HomePage = () => {

   const [widgets , setWidgets] = useState([]);
  
  const {resData ,isLoading, error} =  useFetch();
  useEffect(()=>{
    setWidgets(resData);
   
  },[resData])

  useEffect(()=>{
   console.log(widgets)
  },[widgets])


  if(isLoading){
  return (<div className=' w-full text-center align-middle flex justify-center'>
    loading
  </div>)
}


     return(
      <>
     {widgets.map((item)=>{
              if(item.display == 'grid'){
                return <Grid data={item.items}/>
              }else if(item.display == 'carousel'){
                return <Carousel/>
              }else if (item.display == 'slider'){
                return <Slider data={item.items}/>
              }else{
                return <Banner/>
              }
             
       } )
      }
      </>
     )






}

export default HomePage
