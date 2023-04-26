// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import One from '../../assets/one.png'
import Two from '../../assets/two.png'
import Three from '../../assets/three.png'
import 'swiper/css';

// Import Swiper styles



const swiper = () => {
  return (
    <div><Swiper
    slidesPerView={1}
    spaceBetween={10}
    pagination={{
      clickable: true,
    }}
    breakpoints={{
      "@0.00": {
        slidesPerView: 2,
        spaceBetween: 106,
      },
      "@0.75": {
        slidesPerView: 3,
        spaceBetween: 106,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 180,
      },
    }}
    // onSlideChange={() => console.log('slide change')}
    // onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide><img src={One} alt='img' /></SwiperSlide>
    <SwiperSlide><img src={Three} alt='img' /></SwiperSlide>
    <SwiperSlide><img src={Two} alt='img' /></SwiperSlide>
    <SwiperSlide><img src={Three} alt='img' /></SwiperSlide>
    <SwiperSlide><img src={Two} alt='img' /></SwiperSlide>
  </Swiper></div>
  )
}

export default swiper