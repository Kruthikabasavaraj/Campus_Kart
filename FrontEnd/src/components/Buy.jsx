import React, { useEffect, useState } from 'react'
import Cards from './Cards'
// import list from '../../public/list..json'
import { Link } from 'react-router-dom'
import axios from "axios"

function Buy() {
  const [kart,setkart]=useState([])
  useEffect(()=>{
   const getKart = async()=>{
    try {
     const res = await axios.get("http://localhost:500/kart");
     console.log(res.data);
     setkart(res.data)
    } catch (error) {
      console.log("error",error)
    }
   } 
   getKart();


  },[])
  return (
    <>
 <div >
 <div className='  item-center justify-center text-center'>

 
 <h1 className=' dark:bg-slate-900 dark:text-green  text-2x1 bg-green-50  md:text-4xl mt-20'> 
 Amazing Deals only for you 
 <span> </span>  
 <span className='  text-green-300'>:)</span></h1>
</div>
<div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
  {
  kart.map((item)=>(
    <Cards key={item.id} item={item}/>
  ))

  }
</div>
<div className='item-center justify-center text-center'>

<Link to="/">
<button className='mb-10 mt-6  bg-green-200 px-4 py-2 rounded-md hover:bg-green-300 duration-200'> 
Back </button>
</Link>
</div>
 
 </div>
    </>
   
  )
}

export default Buy