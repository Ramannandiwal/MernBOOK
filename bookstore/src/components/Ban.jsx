import React from 'react'
import BannerCard from '../home/BannerCard'

export default function Ban() {
  return (
    <div className=' px-4 lg:px24 bg-teal-100 flex items-center'>
        <div className=' w-full flex flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/* left side  */}
            <div className=' md:w-1/2 space-y-8 h-full '>
            <h2 className=' text-5xl font-bold leading-snug text-black'>Buy and Sell Your Books <span className=' text-blue-700'>for the Best Prices </span></h2>
            <p className=' md:w-4/5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia autem beatae soluta necessitatibus vitae enim eaque in assumenda repellendus officiis!</p>
            <div>
              <input type="text"name='search' placeholder='search a book ' className=' py-2 px-2 rounded-s-sm outline-none'/>
              <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
            </div>
             </div>
            {/* right side  */}
            <div className=' px-12'><BannerCard/> </div>
        </div>
    </div>
  )
}
