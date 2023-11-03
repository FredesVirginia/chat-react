import React from 'react'

export default function NavBar() {
  return (
    <div className='  flex  h-[70px] items-center bg-indigo-800 justify-between px-8 py-6 ' >
  <span className="text-white font-bold"> Beaches Chat</span>
  <div className=" flex gap-1 ">
    <img src="" alt=""/>
    <span className="text-white font-bold"> Jonh</span>
    <button className='p-1 bg-white'>Logout</button>
  </div>
</div>
  )
}
