import React from 'react'
import Mujer from "../img/mujer.png"
export default function Chats() {
  return (
    <div className='flex-2'>
       <div className='p-2 flex items-center gap-3 text-white cursor-pointer  hover:bg-indigo-900 transition'>
        <img className='w-[60px] rounded-full' src={Mujer}/>
        <div>
            <span className='text-gray-300'>Joanh</span>
            <p>Hellow</p>
        </div>
      </div>
      <div className='p-2 flex items-center gap-3 text-white cursor-pointer  hover:bg-indigo-900 transition'>
        <img className='w-[60px] rounded-full' src={Mujer}/>
        <div>
            <span className='text-gray-300'>Joanh</span>
            <p>Hellow</p>
        </div>
      </div>
      <div className='p-2 flex items-center gap-3 text-white cursor-pointer  hover:bg-indigo-900 transition'>
        <img className='w-[60px] rounded-full' src={Mujer}/>
        <div>
            <span className='text-gray-300'>Joanh</span>
            <p>Hellow</p>
        </div>
      </div>
    </div>
  )
}
