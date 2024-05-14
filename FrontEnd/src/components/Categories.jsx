import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from 'react'
// import list from "../../public/list..json"
import Cards from './Cards';
import axios from "axios"
function Categories() {
  const [kart,setkart]=useState([])
  useEffect(()=>{
   const getKart = async()=>{
    try {
     const res = await axios.get("http://localhost:500/kart");
    
     const data=res.data.filter((data) => data.category === 'Essentials')
     console.log(data);
     setkart(data)
    } catch (error) {
      console.log("error",error)
    }
   } 
   getKart();


  },[])


    //arays data filter
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    // const filteredData = list.filter((data) => data.category === 'Essentials');
    
    return (
    <>
    <div className="max-w-screen-2x1  container mx-auto md:md:px-5 px-2 ">
   <div>
   <h1 className="font-semibold text-xl text-green-600 pb-2 ">Categories Available</h1>
    <p>
        A glimpse of all the available kart items through our website :)
    </p>
   </div>
    
   
  
    <Slider {...settings}>
        {kart.map((item =>(
            //using props tp pass data from parents to child
            <Cards item={item} key={item.id}/> 
        )))}
      </Slider>
   
    </div>
    </>
  )
}

export default Categories