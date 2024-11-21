import React from 'react';
import PropTypes from 'prop-types';
import CarCard from './CarCard';
import '../Css/Car.css'

const Car = ({ cars=[] }) => {
  console.log(cars)
  return (
    <div className='w-11/12 md:w-5/5 m-auto'>
      <div className='py-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-center custom-gap '>
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      <div className='w-full justify-center py-10'>
        <button className='px-8 py-3 rounded-xl text-blue-950 font-medium border-2 border-red-600'>Load More</button>
      </div>
    </div>
  );
};

// // Add PropTypes for validation
// Car.propTypes = {
//   cars: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//       // Add any other properties in the car object if necessary
//     })
//   ).isRequired,
// };

export default Car;
