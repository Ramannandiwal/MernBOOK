import React from 'react'
import Ban from '../components/Ban'
import FavouriteBook from './BestSellerBook'
import Favbook from './Favbook'
import BestSellerBook from './BestSellerBook'
import PromoBanner from './PromoBanner'
import OtherBook from './OtherBook'
import ReviewSection from './ReviewSection'



function Home() {
  return (
   <div>
   <Ban/>
   <BestSellerBook/>
   <Favbook/>
   <PromoBanner/>
   <OtherBook/>
   <ReviewSection/>
   </div>
  )
}

export default Home
