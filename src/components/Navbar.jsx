import React from 'react'

export default function Navbar(){
  return (
    <header className="py-4 container px-6 flex justify-between items-center">
      <div className="text-purple-700 font-bold">radius</div>
      <nav>
        <a className="bg-purple-700 text-white px-3 py-2 rounded" href="#">Sign up</a>
      </nav>
    </header>
  )
}
