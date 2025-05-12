import React from 'react'
import { assets } from '../assets/assets'
import Title from './Title'

const NewsLetter = () => {
    return (
        <div className='bg-[#f6f9fc]'>
        <div className="flex flex-col items-center max-w-5xl lg:w-full rounded-2xl px-4 py-12 md:py-16 mx-2 lg:mx-auto my-30 bg-gray-900 text-white">
        <Title title='Unlock Exclusive Perks' subtitle='Subscribe for early access to deals, seasonal getaways, and members-only perks.' />

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
            <input type="text" className="bg-white/10 px-4 py-2.5 border border-white/20 rounded outline-none max-w-66 w-full"
                placeholder="Enter your email" />
            <button className="flex items-center justify-center gap-2 group bg-black px-4 md:px-7 py-2.5 rounded active:scale-95 transition-all">Subscribe
            <img src={assets.arrowIcon} alt="arrowicon" className="w-3.5 invert group-hover:translate-x-1 transition-all" />
            </button>
        </div>
        <p className="text-gray-500 mt-6 text-xs text-center">By subscribing, you agree to our Privacy Policy and consent to receive updates.</p>
    </div>
    </div>
    )
}

export default NewsLetter