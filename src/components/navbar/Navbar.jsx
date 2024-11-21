import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-white sticky top-0 z-40 py-5'>
      <div className='w-11/12 md:w-4/5 m-auto flex items-center justify-between'>
        <h2 className='text-4xl font-bold text-red-600'>C<span className='text-5xl text-blue-950'>B</span>ook</h2>

        <ul className='flex space-x-5 text-sm font-semibold'>
          
        <li>
            <Link to="/" className="hover:underline">
          Home
            </Link>
          </li>
        
          <li>
            <Link to="/" className="hover:underline">
              Cars
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
          <li>Help</li>
          </ul>
        
        <div className='flex items-center space-x-5'>
       <button className='px-5 py-2 text-indigo-600 font-semibold'>Register</button>
       <button className='px-5 py-2 border border-indigo-600 rounded-md text-indigo-600 font-semibold'>Login</button>
       </div>
       </div>
    </div>
  )
}

export default Navbar