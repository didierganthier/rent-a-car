/* eslint-disable */
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { deleteCar } from '../redux/actions/CarAction';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

SwiperCore.use([Virtual, Navigation, Pagination]);

const AddCarScreen = ({ currentItems }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleDelete = (id) => {
    dispatch(deleteCar(id));
  };

  return (
    <div className="flex flex-col justify-center items-center m-auto bg-blue-100 h-screen">
  <div className="flex flex-wrap gap-11 w-full max-w-[970px] lg:max-w-[1000px] xl:max-w-[1400px] mx-auto relative">
    {currentItems?.map((car) => (
      <div key={car.id}>
        <div
          className="max-h-[300px] xl:max-h-[600px] xl:max-w-[400px] max-w-[280px] mx-auto
          flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow
          "
        >
          <NavLink
            to={`${car.id}`}
            className="flex flex-wrap no-underline hover:no-underline"
          >
            <div className="max-h-[150px] lg:max-h-[240px]">
              <img
                src={car.image?.url}
                alt=""
                className="lg:h-[100%] max-h-[100%]  w-full rounded-t pb-1  object-cover"
              />
            </div>
            <div className="w-full font-bold text-xl text-gray-900 px-6">
              {car.name}
            </div>
          </NavLink>
          <div className="p-2">
            <div className="flex gap-4 justify-end">
              <button
                type="button"
                onClick={() => handleDelete(car.id)}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
    <div
      className="mx-auto bg-white rounded-b rounded-t-none overflow-hidden mt-[40px] 
      lg:mt-[90px]
      "
    >
      
      <NavLink
        to="/addCar"
        className="flex flex-wrap no-underline hover:no-underline text-blue-600 font-bold text-3xl py-10 px-4"
      >
        Add Car
      </NavLink>
    </div>
  </div>
</div>

  );
};

export default AddCarScreen;
