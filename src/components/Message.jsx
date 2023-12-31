import React from 'react'
import Chica from "../img/chica.png";
import Chicaa from "../img/chicaa.png";



export default function Message() {
  return (
    <div className='flex gap-20 mb-4 flex-row-reverse  '>
      <div className='flex flex-col font-light '>
          <img className='w-[40px] ' src= {Chica}  alt=""/>
          <span className='text-gray-700' > Just Now</span>
      </div>
      <div className='max-w-4xl flex flex-col items-end gap-10 mt-2 '  >
        <p className='bg-blue-400 text-white px-2 py-2 rounded-t-none   rounded-r-md rounded-b-md rounded-l-md '> Hello </p>
        <img className='w-[40px]' src={Chicaa}/>
      </div>
    </div>
  )
}

