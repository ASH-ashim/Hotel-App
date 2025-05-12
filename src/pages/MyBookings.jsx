import React, { useState } from 'react'
import Title from '../components/Title'
import { assets, userBookingsDummyData } from '../assets/assets'

const MyBookings = () => {
        const [bookings, setBookings] = useState(userBookingsDummyData)
        return (
                            <div className="py-28 md:pb-35 bg-gray-800 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32 ">
                <Title title="My Bookings" subtitle="Manage your stays with ease — view, modify, or cancel your reservations in one place."
                align={'left'}/>
                        <div className="max-w-6xl mt-8 w-full text-gray-400">
                            <div className="hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full
                                border-b border-gray-300 font-medium text-base py-3">
            <div>Hotels</div>
                <div>Check In Date </div>
                    <div>Check Out Date</div>
    </div>
                        {bookings.map((booking) =>(
                        <div key={booking._id} className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full
                        border-b border-gray-200 py-6 first:border-t">
                           {/* Hotel Details */}
                                            <div className="flex flex-col md:flex-row gap-4">
                                        <img src={booking.room.images[0]} alt='hotel image'
                                            className="md:w-44 rounded shadow object-cover" />
                                            <div>
                                            <p className="font-playfair text-2xl">{booking.hotel.name}
                                    </p>
                    <div className='flex items-center gap-1 text-sm text-gray-200'>
                        <img src={assets.locationIcon} alt='location'
                            className="w-4 h-4 object-contain" />
                <span>{booking.hotel.address}</span>
                </div>
                    <div className='flex items-center gap-1 text-sm text-gray-200'>
                    <img src={assets.guestsIcon} alt='Guests'
            className="w-4 h-4 object-contain" />
<span> Guests: {booking.guests}</span>
                </div>
                                                    <p className="text-base">Total: NPR {booking.totalPrice}</p>
                                                    </div>
                                                </div>
                        {/* Date and timing */}
                    <div className="flex flex-row md:items-center md:gap-12 mt-3 gap-8">
                        <div>
                            <p>Check-In :</p>
                            <p className="text-gray-200 text-sm">
                                {new Date(booking.checkInDate).toDateString()}
                            </p>
                        </div>
                    </div>


                    <div className="flex flex-row md:items-center md:gap-12 mt-3 gap-5">
                        <div>
                            <p>Check-Out :</p>
                            <p className="text-gray-200 text-sm">
                                {new Date(booking.checkOutDate).toDateString()}
                            </p>
                        </div>
                    </div>


 {/* payment status */}
                                <div className="flex flex-col items-start justify-center pt-3">
                <div className="flex items-center gap-2">
                    <div className={`h-3 w-3 rounded-full ${booking.isPaid ?
                        "bg-green-500" : "bg-red-500"
                    }`}></div>
                    <p className={`text-sm ${booking.isPaid ? "text-green-500"
                    : "text-red-500" }`}>
                        {booking.isPaid ? "Paid" : "Unpaid"}</p> 

    </div>
                    {!booking.isPaid && (
                        <button className="px-4 py-1.5 mt-4 text-xs border border-gray-400 rounded-full hover:bg-gray-50 
                        trasition-all cursor-pointer">
                            Pay Now
                        </button>
                    )}
</div>
</div>
))}
    </div>
    </div>
    )
}

export default MyBookings