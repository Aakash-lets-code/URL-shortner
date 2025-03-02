import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav  className='h-14 bg-purple-800 flex justify-between items-center text-white px-3 py-2 '>
        <div className='text-xl font-bold cursor-pointer ' >
            BitLink
        </div>
        <ul className='flex justify-center gap-3 items-center' >
           <Link href="/" > <li>Home</li> </Link>
           <Link href="/about" > <li>About</li> </Link>
           <Link href="/generate" > <li>Shorten</li> </Link>
           <Link href="/contact" > <li>Contact Us</li> </Link>
            <li className='gap-3' >
                <Link href="/generate" > <button className='shadow-2xl px-3 py-1 rounded-xl bg-purple-600 font-bold ' >Try Now</button> </Link>
                <Link href="/github" > <button className='shadow-2xl px-3 py-1 rounded-xl bg-purple-600 font-bold ' >Github</button> </Link>
            </li>
        </ul>
        
    </nav>
  )
}

export default Navbar