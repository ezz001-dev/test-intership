// import logo from './logo.svg';
// import './App.css';

// import logo from '../public/logo.png'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import Image from "next/image"
// import Link from "next/link"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { Search, ChevronDown } from 'lucide-react'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import CSS Swiper
import "swiper/css/pagination"; // Optional: CSS untuk pagination
import "swiper/css/navigation"; 

import { Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Header */}
      <div className="bg-gray-100 py-1">
        <div className="container max-w-4xl mx-auto px-4 flex justify-between text-xs text-gray-600">
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Franchise Opportunities</a>
            <a href="#" className="hover:underline">Help</a>
            <a href="#" className="hover:underline">Feedback</a>
          </div>
          <div className="flex gap-4">
            <span>hello@email.com</span>
            <span>0800 022 2 022</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="container max-w-4xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              // src="../public/logo.png"
              src={`${process.env.PUBLIC_URL}/logo.png`} 
              alt="Crown Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <h1 className="text-4xl font-bold">CARTRIDGE KINGS</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border px-2 py-1 rounded-md"
              />
            </div>
            <button  className="bg-orange-500 text-white px-4 py-1 shadow-md">
              CART (1)
            </button >
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-blue-600">
        <div className="container max-w-4xl mx-auto px-4">
          <ul className="flex justify-between py-3">
            {['HOME', 'INK CARTRIDGES', 'TONER CARTRIDGES', 'CONTACT US', 'LOGIN / REGISTER'].map((item) => (
              <li key={item}>
                <a href="#" className="text-white hover:text-blue-100 text-sm font-semibold">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      
      <div className="relative bg-cover bg-center py-16">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4 text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            FIND THE RIGHT CARTRIDGES FOR YOUR PRINTER
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 mb-6">
              <button className="bg-blue-600 text-white py-3 font-medium">
                3-Step Easy Search®
              </button>
              <button className="bg-gray-200 text-gray-700 py-3 font-medium">
                Search by Serial Number
              </button>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <select
                className="block appearance-none w-52 bg-gray-50 border border-gray-300 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>1. Printer Brand</option>
                  <option>2. HP</option>
                  <option>3. Canon</option>
                  <option>4. Epson</option>
              </select>
              <select
                className="block appearance-none w-52 bg-gray-50 border border-gray-300 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>1. Printer Series</option>
                  <option>2. HP</option>
                  <option>3. Canon</option>
                  <option>4. Epson</option>
              </select>
              <select
                className="block appearance-none w-52 bg-gray-50 border border-gray-300 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                 <option>1. Printer Model</option>
                  <option>2. HP</option>
                  <option>3. Canon</option>
                  <option>4. Epson</option>
              </select>
              <button className="col-span-1 bg-orange-500 hover:bg-orange-600 text-white text-lg py-3 font-bold p-4 shadow-md">
                FIND CARTRIDGES
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-12">FEATURED PRODUCTS</h2>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <SwiperSlide key={item}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="aspect-square relative mb-4">
                  <img
                    src={`${process.env.PUBLIC_URL}/laptop.jpg`} 
                    alt="HP 62 Black Ink Cartridge"
                    className="object-contain"
                  />
                </div>
                <h3 className="font-bold mb-2">HP 62 Black Ink Cartridge</h3>
                <p className="text-gray-600 text-sm mb-4">(HP62904AE)</p>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-xl font-bold">$9.49</p>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold p-4 shadow-md">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  )
}


