import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Search from './../../components/search/Search';
import Car from './../../components/car/Car';
import ImageSlider from './../../components/car/ImageSlider';
import Footer from '../../components/Footer/Footer';


function Home({cars}) {


  return (
    <>
     <div>

      <Navbar/>
      <Search/>
      
      <Car cars={cars}/>
      
      <Footer/>
      </div>
    </>
  )
}

export default Home
