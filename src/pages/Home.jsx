import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'

export default function Home() {
  return (
    <div className='flex flex-column content-center justify-center'>
      <div className='flex border border-white  w-[800px] h-[500px] rounded-lg'>
      <Sidebar/>
      <Chat/>
      </div>
    </div>
  )
}
