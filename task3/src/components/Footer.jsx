import React from 'react'

const Footer = () => {
  return (
    <footer className=' bg-background px-3 py-2 md:py-5 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-3'>
        <div className="footer-top flex flex-col items-start  ">
  <i className="ri-sketching text-7xl"></i>
 <h1 className='text-2xl font-semibold'>Authentic.</h1>
 <p className='text-xs'>© 2008 - All Rights Reserved</p>
        </div>
        <div className="footer-bottom flex flex-col gap-3">
            <div className="bottom-heading">
                <h4 className='text-semibold text-lg font-semibold'>We Belive</h4>
                <p>"The key to building an Authentik business is building an authentic life." - Brian Gardner</p>

        
            </div>
            <div className="footer-navlinks grid md:grid-cols-3">
                <div className="about flex flex-col gap-2 ">
                    <h4 className='font-semibold '>About</h4>
                    <ul>
                    <li><a href="#">whatsapp</a></li>
                    <li><a href="#">Linkedin</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>

                </ul>
                </div>
                 <div className="about flex flex-col gap-2 ">
                    <h4 className='font-semibold '>About</h4>
                    <ul>
                    <li><a href="#">whatsapp</a></li>
                    <li><a href="#">Linkedin</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>

                </ul>
                </div>
                 <div className="about flex flex-col gap-2 ">
                    <h4 className='font-semibold '>About</h4>
                    <ul>
                    <li><a href="#">whatsapp</a></li>
                    <li><a href="#">Linkedin</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>

                </ul>
                </div>

             </div>
             <div className="footer-polichy flex justify-between ">
                <a className='text-blue-900' href="#">Terms & condition</a>
                <a className='text-blue-900' href="#">Privacy Policy</a>
             </div>
        </div>
    </footer>
  )
}

export default Footer