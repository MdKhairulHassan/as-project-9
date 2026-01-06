import React from 'react';
import Banner from '../Banner';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const BannerSlider = () => {
  return (
    <>
      {/* <section className="bg-[url('/bannerimg.png')] bg-cover bg-center my-7">
        <Banner></Banner>
      </section> */}
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
        className="mySwiper"
      >
        <SwiperSlide>
          <section className="bg-[url('/bannerimg.png')] bg-cover bg-center my-7">
            <Banner></Banner>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="bg-[url('/tree1.jpg')] bg-cover bg-center my-7">
            <Banner></Banner>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="bg-[url('/tree2.jpg')] bg-cover bg-center my-7">
            <Banner></Banner>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="bg-[url('/tree3.jpg')] bg-cover bg-center my-7">
            <Banner></Banner>
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BannerSlider;
