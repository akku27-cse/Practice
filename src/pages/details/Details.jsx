import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { useParams } from "react-router-dom";
import ImageSlider from "./../../components/car/ImageSlider";

import { FaStar } from "react-icons/fa";
import { IoIosArrowForward } from 'react-icons/io';

function Details({ cars = [] }) {
  const { carId } = useParams();
  const selectCar = cars.find((car) => car.id === Number(carId));
  const images = [selectCar.image, selectCar.image, selectCar.image];
  return (
    <div>
      <Navbar />
      <div className="w-4/5 m-auto py-20 flex justify-between space-x-10">
        <div className="w-1/2 space-y-5">
          <p className="text-lg">
            Home {">"} Cars {">"}{" "}
            <span className="font-semibold text-indigo-500">Details</span>
          </p>
          <h1 className="text-4xl font-bold text-blue-950">
            {selectCar.title}
          </h1>
          <h2 className="text-3xl font-semibold text-fuchsia-950">
            ₹ {selectCar.price}
          </h2>
          <ImageSlider images={images} />
        </div>

        <div className="w-1/2 flex flex-col justify-between p-4">
          <div className="py-5 border-b space-y-2">
            <h1 className="text-2xl font-semibold">Ratings & Review </h1>
            <div className="flex space-x-5 justify-center items-center">
              <div className=" flex items-center space-x-1 text-amber-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p>
                <span className="font-bold">4.8</span>(80 reviews)
              </p>
            </div>
          </div>

          <div className="py-5 border-b space-y-2">
            <h1 className="text-2xl font-semibold">Description</h1>
            <p>
              A car is a motor vehicle with wheels that's primarily used for
              transporting people on roads. Cars typically have four wheels, an
              engine, and can seat one to eight people. They come in many
              different types, including coupes, sedans, hatchbacks, sports
              cars, station wagons, and race cars.
            </p>
          </div>
          <div className="py-5 border-b space-y-2 text-center">
  <h1 className="text-2xl font-semibold">{selectCar.title}</h1>
  <p className='text-4xl font-semibold text-blue-950'>Buy Now</p>
  <button className="w-48 px-8 flex justify-center items-center rounded-md bg-black font-bold text-green-600 mx-auto">
    <span className="text-xl font-bold">{selectCar.price}</span>
    <span>
      <IoIosArrowForward />
    </span>
  </button>
</div>

        </div>
      </div>
    </div>
  );
}

export default Details;
