import React, { useState } from "react";
import PropTypes from "prop-types";
import { GiCarSeat, GiSteeringWheel } from "react-icons/gi";
import { FaGasPump } from "react-icons/fa";
import { Link } from "react-router-dom";
const CarCard = ({ car = [] }) => {
  const [isHovers, setIsHoverd] = useState(false);
  return (
   
      <div className="border p-1 rounded-2xl">
        <div onMouseEnter={()=>setIsHoverd(true)} onMouseLeave={()=>setIsHoverd(false)} className="w-[300px] z-0 bg-gray-100 space-y-4 rounded-2xl">
          <h1 className="text-2xl font-bold">{car.title}</h1>
          <h1 className="text-blue-900 font-semibold">
            <span>Rupees</span>
            <span>{car.price}</span>
          </h1>
          
          <img src={car.image} style={{
            height: "350px",
            width: "300px",
           
          }} />
          <Link to={`/details/${car.id}`}>
          <div>
              <button className="w-full p-3 bg-green-950 text bg-blue-600 rounded-3xl">Details</button>
             </div>
             </Link>
          {isHovers ? (
            <button className="w-full p-3 bg-red-100 text bg-red-500 rounded-3xl">Buy Now</button>
          ) : (
            <div className="flex justify-between items-center space-y-3 text-gray-700">
              
              <div>
                <GiSteeringWheel size={32}/>
                <p>Manual</p>
              </div>
              <div>
                <GiCarSeat size={32}/>
                <p>4 seat</p>
              </div>

              <div>
                <FaGasPump size={32} />
                <p>32 MPG</p>
              </div>
            </div>
          )}
        </div>
      </div>
  
  );
};

export default CarCard;
// Add PropTypes for validation
// CarCard.propTypes = {
//   car: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//       // Add any other properties in the car object if necessary
//     })
//   ).isRequired,
// };
