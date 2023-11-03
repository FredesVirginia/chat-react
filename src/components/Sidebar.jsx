import React from 'react'
import NavBar from "./NavBar"
import SearchBar from './SearchBar'
import Chats from './Chats'
export default function Sidebar() {
  return (
    <div className='w-[350px]   bg-indigo-600  border border-r-black'>
      <NavBar />
      <SearchBar/>
      <Chats/>
    </div>
  )
}
