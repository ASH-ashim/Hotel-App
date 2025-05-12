import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'


const FeaturedDesination = () => {
    const navigate = useNavigate()
    return (
    <div className=" flex flex-col  items-center px-6 md:px-6 lg:px-24 bg-[#1E1E1E] py-20">

        <Title title='Featured Destination' subtitle='Discover world-class amenities designed to elevate
            your stay, from luxury suites to serene spa experiences.'/>
        <div className="flex flex-wrap items-center justify-center gap-6 mt-20">
            {roomsDummyData.slice(0,4).map((room, index)=> (
                <HotelCard key={room._id} room={room} index={index} />
            ))}
        </div>
        <button
        onClick={() =>{navigate('/rooms'); scrollTo(0, 0)}}
            className="my-16 px-4 py-2 
            text-sm text-black font-medium border border-yellow-600 rounded-b-none bg-white hover:bg-yellow-400 transition-all
                cursor-pointer">View All Destinations</button>
    </div>
    )
}

export default FeaturedDesination