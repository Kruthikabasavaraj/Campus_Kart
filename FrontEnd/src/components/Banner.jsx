import React from 'react'
import hostel2 from "../../public/hostel2.jpg"

const Banner = () => {
  return (
    <>

    <div> </div>
    <div className="max-w-screen-2x1  container mx-auto md:md:px-5 px-2 flex flex-col md:flex-row">
    <div className="w-full md:w-1/3  mt-13 md:mt-30">
<div className=" pt-20 md:pt-32 space-y-4">
<h1 className=" text-4xl font-bold">
    ONE STOP FOR STUDENTS <span className="text-green-300">HOSTEL ESSENTIALS..!</span>
</h1>
<p>
Heyy...Are you a student looking for convenience and comfort? 
Look no further! Explore our wide range of hostel essentials available for 
purchase or rent. From bedding and study essentials to kitchenware and 
storage solutions, we've got you covered. Make your hostel life hassle-free 
with just a few clicks.
</p>
<label className="input input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
</div>
<button className="btn mt-6 btn-success btn-outline">Login</button>


    </div>

   <div className="w-full md:w-1/2 mt-16 md:mt-40 ml-auto md:ml-2 lg:ml-auto text-center">
    <img src={hostel2} className="inline-block w-96 h-72"></img>
</div>


    </div>
    </>
  )
}

export default Banner