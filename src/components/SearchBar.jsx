import React from 'react'
import Mujer from "../img/mujer.png"
export default function SearchBar() {
  return (
    <div className='border border-b-gray-300'>
      <div className='p-2'>
        <input  placeholder='find user' class="border-transparent bg-indigo-600  " type='text' />
      </div>
      <div className='p-2 flex items-center gap-3 text-white cursor-pointer hover:bg-indigo-900 transition'>
        <img className='w-[60px] rounded-full' src={Mujer}/>
        <div>
            <span>Joanh</span>
        </div>
      </div>
    </div>
  )
}
