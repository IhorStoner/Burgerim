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
import mobSlide2 from '../../assets/png/mobSlideburger.png'
import mobSlide1 from '../../assets/png/firstSlide.png'
import banner1Ukr from '../../assets/png/banner1Ukr.png'
import banner2Ukr from '../../assets/png/banner2Ukr.png'
import banner1eng from '../../assets/png/banner1eng.png'
import banner2eng from '../../assets/png/banner2eng.png'
import { useSelector } from 'react-redux';
import { getLanguage } from '../../redux/selectors/languageSelector';
import mobSlideUkr1 from '../../assets/png/firstSlideUkr.png'
import mobSlideUkr2 from '../../assets/png/secondSlideUkr.png'
import mobEngSlide1 from '../../assets/png/mobEngSlide1.png'
import mobEngSlide2 from '../../assets/png/mobEngSlide2.png'

SwiperCore.use([Navigation, Pagination, Autoplay])

export default function Slider() {
const lng = useSelector(getLanguage)

  return (
    <div className='sliderContainer'>
      <Swiper className='sliderImg'
        navigation
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
      >
        <SwiperSlide><img src={lng === 'RUS' && banner1 || lng === 'UKR' && banner1Ukr || lng === 'ENG' && banner1eng} className='sliderImg__slide' alt='Сочный и вкусный бургер на мангале' /></SwiperSlide>
        <SwiperSlide><img src={lng === 'RUS' && banner2 || lng === 'UKR' && banner2Ukr || lng === 'ENG' && banner2eng} className='sliderImg__slide' alt='Быстрая доставка по Одессе' /></SwiperSlide>
      </Swiper>
      <Swiper className='mobile-slider'
        navigation
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide ><img src={lng === 'RUS' && mobSlide1 || lng === 'UKR' && mobSlideUkr1 || lng === 'ENG' && mobEngSlide1} className='mobile-slider__slide'/></SwiperSlide>
        <SwiperSlide><img src={lng === 'RUS' && mobSlide2 || lng ==='UKR' && mobSlideUkr2 || lng === 'ENG' && mobEngSlide2} className='mobile-slider__slide'/></SwiperSlide>
      </Swiper>
    </div>
  )
}
