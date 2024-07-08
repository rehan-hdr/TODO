import React from 'react'
import ProfileInfo from './Cards/ProfileInfo'


const Navbar = () => {

  return (
    <div className="flex justify-between items-center px-6 py-2 bg-white drop-shadow">
        <h2 className=' text-xl font-medium text-black py-2'>TO DO</h2>
        {
        location.pathname === '/home' && (
            <ProfileInfo />
        )}
    </div>
  )
}

export default Navbar