import React from 'react'

const Navbar = () => {
  return (
    <header>
      <nav className='flex text-lg justify-between items-center  py-3 '>
        <div className="logo max-w-5 ">
          <img className='object-fill w-full' src="https://cdn.prod.website-files.com/63fd93c920392238faa118c4/63fec9eeb8692c4a95dd4ec0_logo.svg" alt="" />
        </div>
      <a className='' href="#"> 0 <i class="ri-menu-fill"></i>  </a>        
      </nav>
    </header>
  )
}

export default Navbar