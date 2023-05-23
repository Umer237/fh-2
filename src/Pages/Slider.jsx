import React from 'react'
import '../index.css'
import {Swiper,SwiperSlide} from "swiper/react"

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {EffectCoverflow,Pagination,Navigation } from 'swiper';

import slide_image_1 from "../img/M Gulxar Ahmad.png"
import slide_image_2 from "../img/M Gulxar Ahmad.png" 
import slide_image_3 from "../img/M Gulxar Ahmad.png" 
import slide_image_4 from "../img/M Gulxar Ahmad.png" 
import slide_image_5 from "../img/M Gulxar Ahmad.png" 
import slide_image_6 from "../img/M Gulxar Ahmad.png" 
import slide_image_7 from "../img/M Gulxar Ahmad.png" 


const Slider = () => {
  return (
<>
<div className="container">
    <h1>OUR TEAM</h1>
    <Swiper
    effect={ 'coverflow' }
    grabCursor={ true }
    centeredSlides={ true }
    loop={ true }
    slidesPerView={'auto'}
    coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
    }}
    className='swiper_container'
    >
        <SwiperSlide>
            <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>

<div className="slider-controler">
    <div className="swiper-button-prev slider-arrow">
        <ion-icon name="arrow-back-outline"></ion-icon>
    </div>
    <div className="swiper-button-next slider-arrow">
        <ion-icon name="arrow-forward-outline"></ion-icon>
    </div>
    <div className="swiper-pagination"></div>
</div>

    </Swiper>
</div>
</>
  )
}

export default Slider