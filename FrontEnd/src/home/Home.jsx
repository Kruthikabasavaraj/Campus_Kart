import React from 'react'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/navbar'

function Home() {
  return (
    <>
       <Navbar/>
     <Banner/>
     <Categories/>
      <Footer/>  
    </>
  )
}

export default Home