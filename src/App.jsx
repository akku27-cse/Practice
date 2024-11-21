import { BrowserRouter, Routes,Route } from "react-router-dom";
import "./App.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
 import Home from "./pages/Home/Home";
import Details from "./pages/details/Details";
import Car from "./components/car/Car";
import CarCard from "./components/car/CarCard";
import Contact from "./components/Contact/Contact";

const cars=[
  {
    id:1,
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg/400px-2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg",
      title: "Mazda MX-5",
      start_production: 1989,
      class: "Sports car Roadster",
      price:100000
  },
  {
    id:2,
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VW_Kuebelwagen_1.jpg/400px-VW_Kuebelwagen_1.jpg",
      title: "Volkswagen Kübelwagen",
      class: "Militar vehicle",
      price:100000
  },

  {
    id:4,
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Vintage_car_at_the_Wirral_Bus_%26_Tram_Show_-_DSC03336.JPG/400px-Vintage_car_at_the_Wirral_Bus_%26_Tram_Show_-_DSC03336.JPG",
      title: "Vauxhall Chevette",
      start_production: 1975,
      class: "Supermini",
      price:100000
  },

  {
    id:6,
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Ford_Crown_Victoria_LX.jpg/400px-Ford_Crown_Victoria_LX.jpg",
      title: "Ford Crown Victoria",
      start_production: 1955,
      class: "Full-size Ford",
      price:100000
  },
  {
    id:7,
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Plymouth_Superbird.jpg/400px-Plymouth_Superbird.jpg",
      title: "Plymouth Superbird",
      start_production: 1970,
      class: "Muscle car(today) and Race car(Past)",
      price:100000
  },
  {
    id:8,
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/2nd-Saab-9000-hatch.jpg/400px-2nd-Saab-9000-hatch.jpg",
      title: "Saab 9000",
      start_production: 1984,
      class: "Executive car",
      price:100000
  },
  {
    id:9,
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/2003-2005_Pontiac_Sunfire.jpg/400px-2003-2005_Pontiac_Sunfire.jpg",
      title: "Pontiac Sunfire",
      start_production: 1994,
      class: "Compact",
      price:100000
  },
  {
    id:10,
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/1971_AMC_Javelin_SST_red_Kenosha_street.JPG/400px-1971_AMC_Javelin_SST_red_Kenosha_street.JPG",
      title: "AMC Javelin",
      start_production: 1967,
      class: "{{Unbulleted list| Pony car | Muscle c,ar, },},",
      price:100000
  },
  {
    id:11,
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Jaguar_X-Type_Estate_front_20080731.jpg/400px-Jaguar_X-Type_Estate_front_20080731.jpg",
      title: "Jaguar X-Type",
      start_production: 2001,
      class: "Compact executive car",
      price:100000
  },
  {
    id:12,
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VW_Phaton_%282._Facelift%29_%E2%80%93_Frontansicht%2C_7._Mai_2011%2C_D%C3%BCsseldorf.jpg/400px-VW_Phaton_%282._Facelift%29_%E2%80%93_Frontansicht%2C_7._Mai_2011%2C_D%C3%BCsseldorf.jpg",
      title: "Volkswagen Phaeton",
      start_production: 2002,
      class: "Full-size luxury car",
      price:100000
  },
  {
    id:13,
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Pontiac_G6.jpg/400px-Pontiac_G6.jpg",
      title: "Pontiac G6",
      start_production: 2004,
      class: "Midsi,ze",
      price:100000
  },
  {
    id:41,
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Ford500a.JPG/400px-Ford500a.JPG",
      title: "Ford Five Hundred",
      start_production: 2004,
      class: "Full-size",
      price:100000
  },
  {
    id:15,
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/PontiacSolstice.jpg/400px-PontiacSolstice.jpg",
      title: "Pontiac Solstice",
      start_production: 2005,
      class: "Roadster, coupe",
      price:100000
  },
  {
    id:16,
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Fiat_tipo_f.jpg/400px-Fiat_tipo_f.jpg",
      title: "Fiat Tipo",
      start_production: 1988,
      class: "Small family car",
      price:100000
  },
  {
    id:17,
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/1985-89_Plymouth_Reliant_K_LE.png/400px-1985-89_Plymouth_Reliant_K_LE.png",
      title: "Plymouth Reliant",
      start_production: 1981,
      class: "Mid-s,ize",
      price:100000
  },
  {
    id:18,
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/1978_chevette.JPG/400px-1978_chevette.JPG",
      title: "Chevrolet Chevette",
      start_production: 1975,
      class: "Subcompact",
      price:100000
  },
  {
    id:19,
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Seat_Leon_1.4_TSI_Start%26Stop_Style_%28III%29_%E2%80%93_Frontansicht%2C_10._August_2013%2C_Ratingen.jpg/400px-Seat_Leon_1.4_TSI_Start%26Stop_Style_%28III%29_%E2%80%93_Frontansicht%2C_10._August_2013%2C_Ratingen.jpg",
      title: "SEAT León",
      class: "Small fmily car",
      price:100000
  },

  {
    id:21,
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/1992_MX3_V6_24V.jpg/400px-1992_MX3_V6_24V.jpg",
      title: "Mazda MX-3",
      start_production: 1991,
      class: "Sport compact",
      price:100000
  },
  {
    id:23,
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/2000_TVR_Tuscan_4.0_Speed_Six_by_The_Car_Spy.jpg/400px-2000_TVR_Tuscan_4.0_Speed_Six_by_The_Car_Spy.jpg",
      title: "TVR Tuscan Speed Six",
      start_production: 1999,
      class: "Sports car",
      price:100000
  },
  {
    id:24,
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Aston_Martin_DB9_coupe_02.jpg/400px-Aston_Martin_DB9_coupe_02.jpg",
      title: "Aston Martin DB9",
      start_production: 2004,
      class: "Grand tourer",
      price:100000
  },
  {
    id:25,
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Pontiac_Catalina_front.jpg/400px-Pontiac_Catalina_front.jpg",
      title: "Pontiac Catalina",
      start_production: 1950,
      class: "Full-size",
      price:100000
  },
  {
    id:26,
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Oldsmobile_Toronado_0003.jpg/400px-Oldsmobile_Toronado_0003.jpg",
      title: "Oldsmobile Toronado",
      start_production: 1965,
      class: "Full-size personal luxury car",
      price:100000
  },
  {
    id:27,
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Chrysler_Cirrus_--_01-27-2012.jpg/400px-Chrysler_Cirrus_--_01-27-2012.jpg",
      title: "Chrysler Cirrus",
      start_production: 1994,
      class: "Mid-s,ize",
      price:100000
  },
  
]

function App() {
  return (
  
    
      <>

   <BrowserRouter>
   <Routes>
    <Route path={'/'} element={<Home cars={cars}/>}></Route>
    <Route path={'/details/:carId'} element={<Details cars={cars}/>}></Route>
    <Route path={'/contact'} element={<Contact/>}></Route>
    <Route element={Error}/>
   </Routes>
   </BrowserRouter>

</>


    
  );
}
// Add PropTypes for validation



export default App;
