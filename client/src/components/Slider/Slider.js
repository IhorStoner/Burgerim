import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css'
import banner1 from '../../assets/png/banner1.png'
import banner2 from '../../assets/png/banner2.png'
import './Slider.scss'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Autoplay])

export default function Slider() {

  return (
    <div className='sliderContainer'>
      <Swiper className='sliderImg'
        navigation
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide><img src={banner1} className='sliderImg__slide' /></SwiperSlide>
        <SwiperSlide><img src={banner2} className='sliderImg__slide' /></SwiperSlide>
      </Swiper>
    </div>
  )
}
