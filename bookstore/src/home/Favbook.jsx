import React from 'react'
import favbookicon from '../assets/bookcoverphoto/fifthbook.jpg'
import {Link} from 'react-router-dom'
function Favbook() {
    return (
        <div className=' px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
            <div>
                <img className=' rounded md:w-10/12' src={favbookicon} alt="" />
            </div>
            <div className=' md:w-1/2 space-y-6'>
                <h2 className=' text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find your Favourite <span className=' text-blue-700'>Book Here!</span></h2>
                <p className=' mb-10 text-lg md:w-5/6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati repudiandae ipsa qui maiores doloremque? Adipisci eveniet et similique, reprehenderit consequatur tempora quos nisi delectus. Quo impedit vero quam eveniet consequatur porro sit non facere.</p>

                {/* stats */}
                <div className=' flex flex-col sm:flex-row justify-between gap-6  md:w-3/4 my-14'>
                    <div>
                        <h3 className='text-3xl font-bold'>800+</h3>
                        <p className=' text-base'>Book listing</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>500+</h3>
                        <p className=' text-base'>Registered Users</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>800+</h3>
                        <p className=' text-base'>Pdf Downloads</p>
                    </div>

                </div>
            <Link className=' mt-12 block' to="/shop">
                <button className=' bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore More</button></Link>              

            </div>

        </div>
    )
}

export default Favbook
