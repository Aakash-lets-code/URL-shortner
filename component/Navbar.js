import React from 'react'
import Link from 'next/link'

const Navbar = () => {

  return (

    <nav className='md:h-14 bg-purple-800 flex justify-between items-center flex-col md:flex-row text-white px-3 py-2 text-sm md:text-base h-fit gap-1 md:gap-0'>

      <div className='text-xl font-bold cursor-pointer ' >
        <Link href="/" >BitLink</Link>
      </div>

      <ul className='flex justify-center gap-3 items-center flex-wrap md:flex-row' >

        <Link href="/" > <li>Home</li> </Link>
        <Link href="/about" > <li>About</li> </Link>
        <Link href="/shorten" > <li>Shorten</li> </Link>
        <Link href="/contact" > <li>Contact Us</li> </Link>
        <li className='gap-3' >
          <Link href="/shorten" > <button className='shadow-2xl px-3 py-1 rounded-xl bg-purple-600 font-bold ' >Try Now</button> </Link>
          <Link href="/github" > <button className='shadow-2xl px-3 py-1 rounded-xl bg-purple-600 font-bold ' >Github</button> </Link>
        </li>

      </ul>

    </nav>
  )
}

export default Navbar