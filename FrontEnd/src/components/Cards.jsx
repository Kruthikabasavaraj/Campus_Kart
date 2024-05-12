import React from 'react'

function Cards({item}) {
   
  return (
    <>
    <div className="mt-4 my-3 p-4">
    <div className=" dark:bg-slate-900 dark:text-white dark:border card w-92 h-96 bg-base-100 shadow-xl hover:scale-105 duration-200 ">
  <figure><img src={item.image} alt="essentials" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     {item.name}
      <div className="badge bg-green-300">NEW</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
    <div className="badge badge-outline hover:bg-green-200 duration-200">{item.price}</div>
      <div className="badge badge-outline hover:bg-green-200 duration-200">Buy/Rent</div>
    </div>
  </div>
</div>
</div>
    </>
    
  )
}

export default Cards