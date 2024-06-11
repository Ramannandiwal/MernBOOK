import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {FaStar} from 'react-icons/fa6'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Avatar } from 'flowbite-react'
import dp from '../assets/bookcoverphoto/firstbook.jpg'


// import required modules
import { Pagination } from 'swiper/modules';
export default function ReviewSection() {
  return (
          <div className=' my-12 px-4 lg:px-24'>
            <h2 className=' text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>
            <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
 <SwiperSlide className=' mx-8 shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className=' space-y-6'>
               <div className=' text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>   <FaStar/>
               </div>
               {/* text */}
               <div className=' mt-7'>
                <p className=' mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem voluptates vero, aliquam veniam, aliquid, dolore quidem obcaecati dignissimos magnam provident consequatur harum unde!</p>
                <Avatar img={dp} alt="avatar of Jese" className=' w-10 mb-4' rounded />
                <h5 className=' text-lg font-medium'>Radha</h5>
                <p className='  text-base'>God OF Earth</p>
               </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className=' mx-8 shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className=' space-y-6'>
               <div className=' text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>   <FaStar/>
               </div>
               {/* text */}
               <div className=' mt-7'>
                <p className=' mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem voluptates vero, aliquam veniam, aliquid, dolore quidem obcaecati dignissimos magnam provident consequatur harum unde!</p>
                <Avatar img={dp} alt="avatar of Jese" className=' w-10 mb-4' rounded />
                <h5 className=' text-lg font-medium'>Radha</h5>
                <p className='  text-base'>God OF Earth</p>
               </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className=' mx-8 shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className=' space-y-6'>
               <div className=' text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>   <FaStar/>
               </div>
               {/* text */}
               <div className=' mt-7'>
                <p className=' mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem voluptates vero, aliquam veniam, aliquid, dolore quidem obcaecati dignissimos magnam provident consequatur harum unde!</p>
                <Avatar img={dp} alt="avatar of Jese" className=' w-10 mb-4' rounded />
                <h5 className=' text-lg font-medium'>Radha</h5>
                <p className='  text-base'>God OF Earth</p>
               </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className=' mx-8 shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className=' space-y-6'>
               <div className=' text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>   <FaStar/>
               </div>
               {/* text */}
               <div className=' mt-7'>
                <p className=' mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem voluptates vero, aliquam veniam, aliquid, dolore quidem obcaecati dignissimos magnam provident consequatur harum unde!</p>
                <Avatar img={dp} alt="avatar of Jese" className=' w-10 mb-4' rounded />
                <h5 className=' text-lg font-medium'>Radha</h5>
                <p className='  text-base'>God OF Earth</p>
               </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className=' mx-8 shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className=' space-y-6'>
               <div className=' text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>   <FaStar/>
               </div>
               {/* text */}
               <div className=' mt-7'>
                <p className=' mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem voluptates vero, aliquam veniam, aliquid, dolore quidem obcaecati dignissimos magnam provident consequatur harum unde!</p>
                <Avatar img={dp} alt="avatar of Jese" className=' w-10 mb-4' rounded />
                <h5 className=' text-lg font-medium'>Radha</h5>
                <p className='  text-base'>God OF Earth</p>
               </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className=' mx-8 shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className=' space-y-6'>
               <div className=' text-amber-500 flex gap-2'>
                <FaStar/>
                <FaStar/>
                <FaStar/>   <FaStar/>
               </div>
               {/* text */}
               <div className=' mt-7'>
                <p className=' mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem voluptates vero, aliquam veniam, aliquid, dolore quidem obcaecati dignissimos magnam provident consequatur harum unde!</p>
                <Avatar img={dp} alt="avatar of Jese" className=' w-10 mb-4' rounded />
                <h5 className=' text-lg font-medium'>Radha</h5>
                <p className='  text-base'>God OF Earth</p>
               </div>
            </div>
        </SwiperSlide>
       
      </Swiper>

          </div>
  )
}
