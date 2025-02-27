import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav  className='h-12 bg-purple-800 flex justify-between items-center text-white'>
        <div className='text-xl font-bold ' >
            Bitlink
        </div>
        <ul className='flex justify-center gap-3 items-center' >
            <li>Home</li>
            <li>About</li>
            <li>Shorten</li>
            <li>Contact Us</li>
            <li className='gap-3' >
                <button className='shadow-2xl p-1 rounded-2xl bg-purple-600' >Try Now</button>
                <button className='shadow-2xl p-1 rounded-2xl bg-purple-600' >Github</button>
            </li>
        </ul>
        
    </nav>
  )
}

export default Navbar