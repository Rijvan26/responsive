import React from 'react'

const Navbar = () => {
  return (
    <header className='h-[60px] '>
        <nav className='h-full bg-background  px-2 py-1 flex justify-between items-center'>
            <div className="  logo ">
              <h1 className='text-xl'><i class="ri-remix-fill"></i></h1>
            </div>
            <ul className='hidden   md:flex gap-3 list-none'>
              <li><a href="#">Start here</a></li>
              <li><a href="#">Our blog</a></li>
              <li><a href="#">podcast</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a className='bg-black text-md px-2 py-1 radius-md text-white' href="#">Get in Touch</a></li>

            </ul>
            <div className="menu-icon md:hidden">
          <i class="ri-menu-3-line block md:hidden"></i>

            </div>
        </nav>
    </header>
  )
}

export default Navbar