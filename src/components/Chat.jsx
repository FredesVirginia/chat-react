import React from 'react'
import Add from "../img/add.jpg";
import Camara from "../img/camara.jpg";
import More from "../img/more.png";
import Messages from './Messages';
import Input from './Input';
export default function Chat() {
  return (
    <div className='flex-1 w-[800px]'>
      <div className='h-[50px] bg-indigo-400 flex justify-between flex-row items-center p-4'>
        <span className='text-white'>Joan </span>
        <div className='flex  flex-row gap-3'>
          <img className='w-[20px] rounded-full' src={Camara}/> 
          <img className='w-[20px] rounded-full' src={Add} /> 
          <img className='w-[20px] rounded-full' src={More} /> 
          <img /> 
        </div>
       
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}
