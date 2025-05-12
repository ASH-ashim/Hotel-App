import React from 'react'
import { assets, cities } from "../assets/assets"
const Hero = () => {
        return (
    <div className='flex flex-col items-center justify-center px-6
    md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/heroImage.jpg")] bg-no-repeat bg-cover bg-center h-screen'>
    <span className="text-7xl text-blue-200 mt-20 font-bold "> ASH Hotel</span>
        <h1 className="text-2xl px-3.5 py-1 rounded-full"> The Ultimate Hotel Experience </h1>
        <p className="font-playfair bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#3b82f6]
        text-xl md:text-2xl">ASH Hotel – Where luxury embraces serenity, and every moment is crafted for your comfort and delight.</p>
        <br></br>
        <br></br>
        <form className='bg-[#595758] text-[#ffe4f3] rounded-lg px-6 py-4  flex flex-col md:flex-row max-md:items-start gap-4 max-md:mx-auto'>

<div>
    <div className='flex items-center gap-2'>
        <img src={assets.calenderIcon} alt="CalenderIcon" className="h-4" />
        <label htmlFor="destinationInput" className="text-[#FFEEF2]">Destination</label>
    </div>
    <input list='destinations' id="destinationInput" type="text"
    className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="Type here" required />
    <datalist id='destinations'>
    {cities.map((city, index) =>(
        <option value={city} key={index} />
    ))}
    </datalist>
</div>

<div>
    <div className='flex items-center gap-2'>
    <img src={assets.calenderIcon} alt="CalenderIcon" className="h-4"/>
        <label htmlFor="checkIn" className="text-[#FFEEF2]">Check in</label>
    </div>
    <input id="checkIn" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
</div>

<div>
    <div className='flex items-center gap-2'>
        <img src={assets.calenderIcon} alt="" className="h-4" />
        <label htmlFor="checkOut" className="text-[#FFEEF2]">Check out</label>
    </div>
    <input id="checkOut" type="date" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
</div>

<div className='flex md:flex-col max-md:gap-2 max-md:items-center'>
    <label htmlFor="guests" className="text-[#FFEEF2]">Guests</label>
    <input min={1} max={6} id="guests" type="number" className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16" placeholder="0" />
</div>

<button className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full max-md:py-1' >
<img src={assets.searchIcon} alt="searchIcon" className="h-4"/>
    <span>Search</span>
</button>
</form>
    </div>
    )
}

export default Hero