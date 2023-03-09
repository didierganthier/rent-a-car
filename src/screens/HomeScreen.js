/* eslint-disable */
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router-dom';
import Loader from '../components/Loader';
import { getCars } from '../redux/actions/CarAction';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper';

const HomeScreen = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    swiperRef.current.swiper.slideNext();
  };
  const handleNext = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const carList = useSelector((state) => state.carList);
  const { loading, cars } = carList;

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };
  return (
    <>
      {loading && <Loader />}
      <div className="flex flex-col items-center justify-center mb-10 mt-[2rem]">
        <h1
          className="
            text-4xl font-bold text-gray-900 mb-4
            "
        >
          LATEST MODELS
        </h1>
        <p
          className="
            text-gray-500 text-sm
            "
        >
          Check out our latest models
        </p>
        <hr
          className="
            w-20 h-1 mt-4 bg-[#256BDA]
            "
        />
      </div>
      {cars && (
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          initialSlide={1}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper max-w-[400px] md:max-w-[1000px] lg:max-w-full overflow-hidden relative" style={{ margin: '0 auto' }}
          ref={swiperRef}
        >
          {cars.map((car) => (
            <SwiperSlide
              key={car.id}
              className="max-w-[300px] mr-[60px] ml-[1.2rem] shadow-md rounded-2xl overflow-hidden px-4 py-2"
            >
              <NavLink className="car" to={`/car/${car.id}`}>
                <img
                  src={car.image}
                  className="w-full max-h-[300px] rounded-full h-96 object-cover"
                  alt="car"
                />

                <div className="card-body mb-[4rem]">
                  <h3
                    className="font-bold
                                        text-xl text-gray-900 px-6 mt-[1rem] mb-[1rem]
                                    "
                  >
                    {car.name}
                  </h3>
                  <p className="card-text">{truncate(car.description, 100)}</p>
                </div>
              </NavLink>
            </SwiperSlide>
          ))}

          <div
            className="absolute text-[1.8rem]
                            top-1/3 left-0 shadow-md z-10 text-[#256BDA]
                            rounded-full p-3 cursor-pointer hover:animate-bounce
                            hidden md:block
                            "
            onClick={handlePrev}
          >
            <BsFillArrowLeftCircleFill />
          </div>
          <div
            className="absolute text-[1.8rem]
                            top-1/3 right-0 shadow-md z-10 rotate-180 text-[#256BDA]
                            rounded-full p-3 cursor-pointer hover:animate-bounce
                            hidden md:block
                            "
            onClick={handleNext}
          >
            <BsFillArrowLeftCircleFill />
          </div>
        </Swiper>
      )}
    </>
  );
};

export default HomeScreen;
