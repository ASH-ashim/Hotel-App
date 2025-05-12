import React from 'react'
import { Link } from 'react-router-dom'
import {assets} from '../../assets/assets'
import {UserButton} from '@clerk/clerk-react'

const Navbar = () => {
    return (
    <div className="flex items-center bg-amber-200 justify-between
    px-4 md:px-8 border-b bprder-gray-300 py-3
    transition-all duration-400">
    <Link to="/">
    <img src={assets.logo} alt="logo" className="h-9 invert opacity-80" />
    </Link>
    <UserButton />
    </div>
    )
}

export default Navbar