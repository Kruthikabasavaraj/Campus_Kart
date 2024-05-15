import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import axios from "axios";
import toast from 'react-hot-toast';
function Signup() {
const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const userInfo ={
      fullname:data.fullname,
      email:data.email,
      password:data.password

    }
//to store the above using api

//to return promise in javascript
try {
  const response = await axios.post("http://localhost:500/user/signup", userInfo);
  // alert("Signup successful");
  toast.success("Signup successfull");
  localStorage.setItem("Users", JSON.stringify(response.data));
} catch (err) {
  console.error(err);
  // alert("Error: " + err.response.data.message);
  toast.error("Error: " + err.response.data.message);
}

 };
  return (
    <>
    <div><div className='flex h-screen items-center justify-center'>
        <div  className="w-[600px]">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h3 className="font-bold text-lg text-green-400">Signup</h3>
    <div className='mt-4 space y-4'>
    <span>Name</span><br/>
    <input type='text' 
    placeholder='Enter your Name' 
    className='w-80 px-3 border rounded-md outline-none'
    {...register("fullname", { required: true })}
    />
<br/>
<br/>
    {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
   <div className='mt-4 space y-4'>
    <span>Email</span><br/>
    <input type='email' placeholder='Enter your Mail' 
    className='w-80 px-3 border rounded-md outline-none'
    {...register("email", { required: true })}
    /><br/>
    <br/>
    {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div> 
    <div className='mt-4 space y-4'>
    <span>Password</span><br/>
    <input type='password' placeholder='Enter password' 
    className='w-80 px-3 border rounded-md outline-none'
    {...register("password", { required: true })}
    /><br/>
    <br/>
    {errors.password && <span className='text-sm text-red-500'>This field is required</span>}

    </div>
    <div className='flex justify-around mt-4'>
        <button type="submit" className='bg-green-400 text-black px-5 py-1 p-2 rounded-md hover:bg-green-300 duration-200 cursor-pinter ml-auto ml-2 lg:ml-0'> Signup 
        </button>
        <p>{" "}Have Account? {" "}
        <button  className='underline text-blue-500 cursor-pointer'
        onClick={()=>document.getElementById("my_modal_3").showModal()}
        > 
        Login
        </button>{" "}</p>
        <Login/>
    </div>
    </form>
  </div>
</div>
        </div></div>
    </>
  )
}

export default Signup