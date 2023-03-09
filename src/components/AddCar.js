/* eslint-disable */

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCar } from '../redux/actions/CarAction';

const AddCar = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [brand, setBrand] = useState('');
  const [dailyrate, setDailyrate] = useState('');
  const [valid, setValid] = useState(false);

  const dispatch = useDispatch();

  const Navigate = useNavigate();
  useEffect(() => {
    if (name && image && type && description && brand && dailyrate) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [name, image, type, description, brand, dailyrate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('car[name]', name);
    formData.append('car[image]', image);
    formData.append('car[car_type]', type);
    formData.append('car[description]', description);
    formData.append('car[brand]', brand);
    formData.append('car[daily_rate]', dailyrate);

    dispatch(addCar(formData));
    Navigate('/cars');
  };

  return (
    <div className='flex justify-center h-screen bg-no-repeat bg-cover bg-[url("https://images.unsplash.com/photo-1524345591067-da3f166c0e42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80")] items-center'>
      {/* add from using tailwindcss */}
      <form onSubmit={handleSubmit} className="w-full max-w-lg shadow-xl py-10 px-4 rounded-xl bg-black bg-opacity-30 backdrop-filter backdrop-blur-lg">
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 border border-gray-200 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="name"
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="image"
            >
              Image Link
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="image"
              type="text"
              placeholder="Image Link"
              required
              onChange={(e) => setImage(e.target.value)}
              multiple
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="type"
            >
              Type
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="type"
              type="text"
              placeholder="Type"
              required
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight  resize-none focus:outline-none focus:bg-white"
              id="description"
              type="text"
              placeholder="Description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="brand"
            >
              Brand
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="brand"
              type="text"
              placeholder="Brand"
              required
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="daily_rate"
            >
              Daily Rate
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="daily_rate"
              type="text"
              placeholder="Daily Rate"
              required
              value={dailyrate}
              onChange={(e) => setDailyrate(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex justify-center w-full mb-6 md:mb-0">
            <button
              className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-8 rounded"
              type="submit"
            >
              Add Car
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCar;
