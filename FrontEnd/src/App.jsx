import React from 'react'
import Home from './home/Home'

import { Routes,Route } from "react-router-dom"
import BuyRent from './Buy_Rent/BuyRent'
import Signup from './components/Signup'
import Login from './components/Login'

const App = () => {
  return (
   <>
   <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Buy" element={<BuyRent/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Login" element={<Login/>}/>
      

      
    </Routes> 
    </div>
   </>
  )
}

export default App