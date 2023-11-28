"use client";




import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider({data}) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="topSwiper"
      >
           
       
        {data.map((items)=>{
           return <SwiperSlide>
        <div className='w-full'>
                <img className='w-full' src={`https://www.ishtari.com/image/${items.image}`} alt="" />
            </div>
            </SwiperSlide>
        })}
    
        
      </Swiper>
    </>
  );
}








