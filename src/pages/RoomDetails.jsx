import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { assets, roomCommonData, roomsDummyData } from '../assets/assets';
import StarRating from '../components/StarRating';

const RoomDetails = () => {
  const {id} = useParams()
  const [room, setRoom] = useState(null)
  const [mainImage, setMainImage] = useState(null)

  useEffect(() => {
    const room = roomsDummyData.find(room => room._id === id)
    if (room) {
      setRoom(room)
      setMainImage(room.images[0])
    }
  },[id])

  if (!room) return null

  return (
    <div className="py-28 md:py-35 px-4 md:px-16 bg-gray-300 lg:px-24 xl:px-32">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
        <h1 className="text-3xl md:text-4xl font-playfair">{room.hotel.name}<span className="font-inter text-sm">({room.roomType})</span></h1>
        <p className="text-xs font-inter py-1.5 px-3 text-white bg-orange-500 hover:bg-orange-300 cursor-pointer rounded-full">10% OFF</p>
      </div>
      
      <div className="flex items-center gap-1 text-gray-500 mt-2">
        <StarRating />
        <p className="ml-2">100+ Reviews</p>
      </div>

      <div className='flex items-center gap-1 text-gray-500 mt-2'>
        <img src={assets.locationIcon} alt="" />
        <span>{room.hotel.address}</span>
      </div>

      <div className="flex flex-col lg:flex-row mt-6 gap-6">
        <div className="lg:w-1/2 w-full">
        <img src={mainImage} alt="room" 
        className="w-full rounded-xl shadow-lg object-cover" />
      </div>
      <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
          {room.images.length > 1 && room.images.map((image, index) => (
          <img onClick={()=>setMainImage(image)}
          key={index} src={image} alt="room"
          className={`w-full rounded-xl shadow-md object-cover cursor-pointer
            ${mainImage === image ? "outline-3 outline-orange-500" : ""}`} />
            ))}
      </div>
    </div> 
            {/* checkin form */}
    <form className="flex flex-col md:flex-row items-start md:items-center
    justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6
    rounded-xl mx-auto mt-16 max-w-6xl">
  <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center
  gap-4 md:gap-10 text-gray-500'>
    <div className="flex flex-col">
      <label htmlFor="checkInDate" className="font-medium">Check In: </label>
      <input type="date" id='checkInDate' placeholder='Check In'
      className="w-full rounded border border-gray-300 px-3 py-2
      mt-1.5 outline-none" required/>
    </div>
           {/* checkout form */}
    <div className='w-px h-15 bg-gray-300 max-md:hidden'></div>
    <div className="flex flex-col">
      <label htmlFor="checkOutDate" className="font-medium">CheckOut: </label>
      <input type="date" id='checkOutDate' placeholder='Check out'
      className="w-full rounded border border-gray-300 px-3 py-2
      mt-1.5 outline-none" required/>
    </div>
    <div className='w-px h-15 bg-gray-300 max-md:hidden'></div>

            {/* guests */}
    <div className="flex flex-col">
      <label htmlFor="Guests" className="font-medium">Guests: </label>
      <input type="number" id='Guests' placeholder='0'
      className="max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5
      outline-none" required/>
    </div>

  </div>
  <button type="submit" className="bg-primary hover:bg-primary-dull active:scale-95
  transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer">
    Book Now
  </button>
    </form>

    {/* specifications */}
    <div className="mt-25 space-y-4">
  {roomCommonData.map((spec, index) => (
    <div key={index} className="flex items-start gap-2">
      <img src={spec.icon} alt={`${spec.title}-icon`} className='w-6 h-6' />
      <div>
        <p className="text-base font-medium">{spec.title}</p>
        <p className="text-gray-500 text-sm">{spec.description}</p>
      </div>
    </div>
  ))}
</div> 
<div className="max-w-3xl border-y border-gray-900 my-15 py-10 text-gray-500">
  <p>Nestled in the heart of the city, ASH Hotel blends timeless elegance with modern comfort
    . From beautifully designed rooms and world-class amenities to serene spa treatments and fine dining experiences
    , every detail is crafted for your relaxation and delight. Whether you're planning a romantic escape, 
    a business trip, or a family vacation, our dedicated hospitality ensures every stay is nothing short of exceptional.</p>
</div>
<div className="flex flex-col items-start gap-4">
  <div className="flex flex-col items-start gap-4">
    <img src={room.hotel.owner.image} alt="owner" className='h-14 w-14 md:h-8/12
    md:w-18 rounded-full' />
    <div>
      <p className="text-lg ms:text-xl">Hosted By {room.hotel.name}</p>
      <div className="flex items-center mt-1">
          <StarRating />
          </div>
        <p className="ml-2">100+ Reviews</p>
      </div>
    </div>
  </div>
  <button className="px-6 py-2.5 rounde text-white bg-primary hover:bg-primary-dull
  transition-all cursor-pointer">Contact Owner</button>
  <div/>
  </div>
  )
}


export default RoomDetails;