import React from 'react'
import Add from "../img/imagen.jpg";
export default function Register() {
  return (
    <div className='py-10  m-auto w-[400px] h-[490px] bg-white flex justify-center content-center'>
      <div>
         <h1 className='text-2xl font-bold text-center'>Beaches Chat</h1>
        <h2 className='text-center'> Register</h2>
        <form className="grid gap-8">
        <input className="border-b-gray-300 border-b focus:outline-blue-500 " type="text" placeholder="Name"/>
          <input className = "border-b-gray-300 border-b" type="email" placeholder="Email"/>
          <input className = "border-b-gray-300 border-b" type="password" placeholder="password"/>
            <label className='cursor-pointer' html="file">
                <img className='w-[40px]' src={Add} />
                <span> Add your avatar</span>
            </label>
          <button className='bg-indigo-400 p-2 font-bold text-white'> Sign Up</button>
        </form>
        <p className='text-center my-4'>You do have an Account? Login</p>
      </div>
    </div>
  )
}
