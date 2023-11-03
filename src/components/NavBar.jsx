import React from 'react'
import Perfil from "../img/perfil.jpg";
export default function NavBar() {
  return (
    <div className='  flex  h-[70px] items-center bg-indigo-800 justify-between px-3 py-4 ' >
  <span className="text-white font-bold"> Beaches Chat</span>
  <div className=" flex gap-3 justify-center ">
    <img className='w-[25px] rounded-full' src={Perfil} alt=""/>
    <span className="text-1xl text-gray-400 font-bold"> Jonh</span>
    <button className='px-2 bg-indigo-500 text-white'>Logout</button>
  </div>
</div>
  )
}
