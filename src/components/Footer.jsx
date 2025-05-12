import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
<div className=' bg-[#f6f9fc] text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32'>
            <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
                <div className='max-w-80'>
                    <img src={assets.logo} alt="logo" className='mb-4 h-10 w-10  md:h-9 invert opacity-90' />
                    <p className='text-sm'>
                    ASH Hotel is your sanctuary of elegance and comfort, offering world-class hospitality and unforgettable
                    experiences. Whether you're traveling for leisure or business, we promise warmth, refinement, 
                    and exceptional service — every moment, every stay.


                    </p>
                    <div className='flex items-center gap-3 mt-4'>
                        {/* Instagram */}
                        <a href="https://www.instagram.com/ashim__dev/" target="_blank" rel="noopener noreferrer">
                            <img 
                            src={assets.instagramIcon} 
                            alt="Instagram"
                            className="w-6 cursor-pointer" 
                            />
                            </a>

                        {/* Facebook */}
                        <a href="https://www.facebook.com/ashim.bhattarai.824853" target="_blank" rel="noopener noreferrer">
                        <img src={assets.facebookIcon} alt="facebook"
                        className='w-6 cursor-pointer'/>
                        </a>
                        {/* Twitter */}
                        <a href="https://x.com/AshimBHATT15146" target="_blank" rel="noopener noreferrer">
                        <img src={assets.twitterIcon} alt="twitter"
                        className='w-6 cursor-pointer'/>
                        </a>
                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/ashimdev23/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BHgzGJbj6TtCrLhwbVIIx9w%3D%3D" target="_blank" rel="noopener noreferrer">
                        <img src={assets.linkendinIcon} alt="linkedin"
                        className='w-6 cursor-pointer'/>
                        </a>
                    </div>
                </div>

                <div>
                    <p className='font-playfair text-lg text-gray-800'>COMPANY</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Partners</a></li>
                    </ul>
                </div>

                <div>
                    <p className=' font-playfair text-lg text-gray-800'>SUPPORT</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Safety Information</a></li>
                        <li><a href="#">Cancellation Options</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Accessibility</a></li>
                    </ul>
                </div>

                <div className='max-w-80'>
                    <p className='font-playfair text-lg text-gray-800'>STAY UPDATED</p>
                    <p className='mt-3 text-sm'>
                        Subscribe to our newsletter for inspiration and special offers.
                    </p>
                    <div className='flex items-center mt-4'>
                        <input type="text" className='bg-white rounded-l border border-gray-300 h-9 px-3 outline-none' placeholder='Your email' />
                        <button className='flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r'>
                               {/* Arrow icon */}
                            <img src={assets.arrowIcon} alt="arrowicon" 
                            className="w-3.5 invert" />
                        </button>
                    </div>
                </div>
            </div>
            <hr className='border-gray-300 mt-8' />
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} ASH. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Sitemap</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer

