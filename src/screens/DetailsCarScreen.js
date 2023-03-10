/* eslint-disable */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import pic from '../assets/canva.png';
import { AiOutlineRight } from 'react-icons/ai';
import BookingPopUp from '../components/BookingPopUp';

import {
  BsArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from 'react-icons/bs';
import { SlSettings } from 'react-icons/sl';

const DetailsCarScreen = () => {
  const [booking, setBooking] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const carDetails = useSelector((state) => state.carList);
  const { loading, cars } = carDetails;
  const carss = cars?.find((c) => c.id === parseInt(id, 10));

  return (
    <>
      {loading && <Loader />}
      {carss && (
        <div className="flex flex-col items-center md:justify-start justify-center w-full md:flex-row grow h-full lg:pt-20 lg:pb-10">
          <div className="grow  md:w-5/6 flex items-center justify-center md:px-10 rounded-full aspect-square">
            <img
              src={carss.image}
              alt={carss?.name}
              className="object-cover block rounded-2xl shadow-2xl hover:scale-105 m-4 aspect-square w-[100%] md:ml-[40%]"
            />
          </div>
          <div className="flex flex-col w-full items-start md:items-end  md:mr-10 py-10 px-10 lg:px-0 text-center">
            <div className="flex flex-col  items-center md:items-end">
              <h1 className="md:text-right mb-4 text-3xl font-semibold text-slate-800">
                {carss?.name}
              </h1>
              <p className=" mb-10  md:text-right text-gray-500 text-sm">
                {carss?.description}
              </p>
            </div>
            <div class="flex flex-col items-end rounded-xl border overflow-hidden shadow-2xl">
              <div class="flex flex-col items-center justify-center bg-blue-500 px-2 text-white py-4">
                <h3 class="font-bold">Other Details</h3>
              </div>
              <ul class="flex-grow-0 p-4 bg-white shadow-lg rounded-xl mt-4">
                <li class="bg-gray-100 py-2 px-4 odd:bg-gray-200">
                  <div class="flex justify-between">
                    <span>Brand</span>
                    <span class="font-bold">{carss?.brand}</span>
                  </div>
                </li>
                <li class="bg-gray-100 py-2 px-4 odd:bg-gray-200">
                  <div class="flex justify-between">
                    <span>Daily Rate</span>
                    <span class="font-bold">${carss?.daily_rate}</span>
                  </div>
                </li>
              </ul>
              <p class="flex items-center justify-end gap-2 py-2 px-4 bg-blue-500 text-white rounded-xl my-10 mx-4">
                DISCOVER MORE MODELS <AiOutlineRight />
              </p>
              <img src={pic} alt="canva" class="w-full h-auto" />
              <div class="my-6 flex justify-center">
                <button type="button" class="bg-blue-500 text-white hover:bg-blue-400 px-6 py-2 rounded-full font-semibold transition-colors border-2 border-transparent">
                  <div class="flex items-center gap-4 justify-center">
                    <span onClick={() => setBooking(true)}>Reserve</span>
                    <BsArrowRightCircleFill />
                  </div>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
      <div
        className="fixed text-[1.8rem]
                            bottom-14 left-60 z-10 bg-[#256BDA] shadow-xl animate-bounce text-white
                            rounded-full p-3 cursor-pointer
                            hidden md:block
                            "
        onClick={() => navigate(-1)}
      >
        <BsFillArrowLeftCircleFill />
      </div>
      {booking && (
        <div
          className="fixed md:flex md:items-center md:justify-center w-full h-full 
             top-0 left-0 z-50 
            "
        >
          <BookingPopUp carId={id} onClose={() => setBooking(false)} />
          <div
            className="
                  absolute top-0 left-0 w-full h-full bg-black
                  opacity-80
                "
          />
        </div>
      )}
    </>
  );
};

export default DetailsCarScreen;
