import React from 'react';
import Aadd from "../img/aadd.jpg"
export default function Input() {
  return (
    <div className=' flex justify-between px-4 bg-white h-[50px] '>
    <input type="text"  className='border-none focus:outline-none' placeholder='Type Something...'/>
      <div className='flex justify-between'>
        <img src={Aadd} className='w-[30px]'/>
        <input type="file" style={{display:"none"}} id="file"/>
       <label htmlForm= "file" >
           <img  alt=""  />
        
        </label>
        <button className='mt-3 bg-blue-400 text-white  px-1 h-[30px]  '>Send</button>
        
      </div>
    </div>
  )
}
