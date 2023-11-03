import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import Chats from '../components/Chats'

export default function Home() {
  return (
    <div className='flex flex-column content-center justify-center'>
      <div className='flex border border-white  w-[1000px] h-[500px] rounded-lg'>
      <Sidebar/>
      <Chat/>
    
      </div>
    </div>
  )
}
