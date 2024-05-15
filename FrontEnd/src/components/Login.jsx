import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from 'react-hot-toast'
function Login() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
     
      const onSubmit = async (data) => {
        const userInfo ={
        
          email:data.email,
          password:data.password
    
        }
    //to store the above using api
    
    //to return promise in javascript
    try {
      const response = await axios.post("http://localhost:500/user/login", userInfo);
      // alert("login successful");
      toast.success("login successfull");
      localStorage.setItem("Users", JSON.stringify(response.data));
    } catch (err) {
      console.error(err);
      // alert("Error: " + err.response.data.message);
      toast.error("Error: " + err.response.data.message);
    }
  };
  return (
    <>
        <div>
        <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
  <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
  onClick={()=>document.getElementById("my_modal_3").closest()}>✕</Link>
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      
   
    <h3 className="font-bold text-lg text-green-400">Login</h3>
   <div className='mt-4 space y-4'>
    <span>Email</span><br/>
    <input {...register("email", { required: true })} 
    type='email' placeholder='Enter your Mail' 
    className='w-80 px-3 border- rounded-md outline-none'/>
    <br/>
        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    
    </div> 
    <div className='mt-4 space y-4'>
    <span>Password</span><br/>
    <input type='password' placeholder='Enter password' 
    className='w-80 px-3 border rounded-md outline-none' 
    {...register("password", { required: true })}/>
    <br/>
    {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    <div className='flex justify-around mt-4'>
        <button type="submit" className='bg-green-400 text-black px-8 py-1 p-2 rounded-md hover:bg-green-300 duration-200 cursor-pinter ml-auto ml-2 lg:ml-0'> 
        Login 
        </button>
        <p>Not registered {" "}
        <Link to='/Signup' className='underline text-blue-500 cursor-pointer'> 
        Signup
        </Link>{" "}</p>
    </div>
    </form>
  </div>
</dialog>
        </div>
    </>
  )
}

export default Login