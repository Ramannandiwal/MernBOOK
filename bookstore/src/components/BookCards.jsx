import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Link, NavLink} from "react-router-dom"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { FaCartShopping } from "react-icons/fa6";


// import required modules
import { Pagination } from 'swiper/modules';

// import required modules
function BookCards({headLine,books}) {
  return (
    <div className=' my-16 px-4  lg:px-24'>
      <h2 className=' text-5xl text-center font-bold text-black my-5'>{headLine}</h2>
      {/*Cards  */}
      <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       
       {
        
     books.map((books)=>{
     
      return (
        <SwiperSlide key={books._id}>
          <NavLink to={`/book/${books._id}`}>
            <div className=' relative'>
              <img src= {books.imageURL} alt=''/>
              <div className=' absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded'>
                <FaCartShopping className=' w-4 h-4 text-white'/>
              </div>
            </div>
            <div>
              <h2>{books.bookTitle}</h2>
              <p>{books.authorName}</p>
            </div>
            <div>
              <p className=' my-6 font-extrabold'>$10.00</p>
            </div>
          </NavLink>
        </SwiperSlide>
      )
     })
       }
      </Swiper>
      </div>

    </div>
  )
}

export default BookCards
