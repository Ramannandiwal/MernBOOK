import React from 'react';
import bookpic from '../assets/bookcoverphoto/Ninthbook.jpg'
import { Link } from 'react-router-dom'
function PromoBanner() {
  return (
    <div className=' mt-16 py-12 bg-teal-100 px-4 lg:px-24'>
       <div className=' flex flex-col md:flex-row justify-between items-center gap-12'>
             <div className=' md:w-1/2 px-10' >
                <h2 className=' text-4xl font-bold mb-6 leading-snug'>2023 National Book Award for Fiction</h2>
                <Link to='/shop' className='block'><button className=' bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Get Promo Code</button></Link>
             </div>
             <div>
                <img className=' w-72' src={bookpic} alt="" />
             </div>
        
       </div>
      
    </div>
  )
}

export default PromoBanner
