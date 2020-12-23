import React, { useState  } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.css'
import banner1 from '../../assets/png/banner1.png'
import banner2 from '../../assets/png/banner2.png'
import banner3 from '../../assets/jpeg/banner3.jpg'
import banner4 from '../../assets/jpeg/banner4.jpg'
import './Slider.scss'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination])

export default function Slider() {

  return (
    <div className='sliderContainer'>
      <Swiper className='sliderImg'
      navigation
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay
      loop={true}
      >
      <SwiperSlide><img src={banner1} className='sliderImg__slide'/></SwiperSlide>
      <SwiperSlide><img src={banner2} className='sliderImg__slide'/></SwiperSlide>
      <SwiperSlide><img src={banner3} className='sliderImg__slide'/></SwiperSlide>
      <SwiperSlide><img src={banner4} className='sliderImg__slide'/></SwiperSlide>
    </Swiper>
    </div>
  )
}
