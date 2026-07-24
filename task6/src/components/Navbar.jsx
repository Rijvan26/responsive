import React from 'react'

const Navbar = () => {
  return (
   <header className='h-17  justify-center items-center'>
    <nav className='h-full text-amber-100  flex items-center justify-center'>
        <ul className='flex gap-3'>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
   </header>
)
}

export default Navbar