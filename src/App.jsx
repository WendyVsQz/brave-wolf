import React from 'react'
import Nav from './components/navbar/navbar'
import Home from './components/home/home'
import Wishlist from './components/WishList/wishList'
import { apiCall } from './api';

/* import CareerTips from './components/careerTips/careerTips'
import Mbti from './components/MBTI/mbti' */
import Footer from './components/footer/footer'

const App = () => {

  apiCall();

  return (
    <>
      <Nav />
      <Home />
      <Wishlist />
      {/*   <CareerTips/>
    <Mbti/> */}
      <Footer />

    </>

  )
}

export default App
