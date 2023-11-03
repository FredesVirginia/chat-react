import React from 'react'

export default function Login() {
  return (
    <div className='py-10   m-auto w-[400px] h-[340px] bg-white flex justify-center content-center'>
    <div>
       <h1 className='text-2xl font-bold text-center'>Beaches Chat</h1>
      <h2 className='text-center'> Login</h2>
      <form className="grid gap-8">
     
        <input className = "border-b-gray-300 border-b" type="email" placeholder="Email"/>
        <input className = "border-b-gray-300 border-b" type="password" placeholder="password"/>
        
        <button className='bg-indigo-400 p-2 font-bold text-white'> Login</button>
      </form>
    <p className='text-center my-4'>No tienes cuenta ? Register</p>
    </div>
  </div>
  )
}
