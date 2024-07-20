import React from 'react'
import iamge from '../assets/logo.svg'
import setting from '../assets/setting.svg'
import notification from '../assets/notification.svg'
import profile from '../assets/home.svg'
import profileImage from '../assets/profile.png'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100">
      <diiv className="">
        <img src={iamge} alt="Deep Thought Logo" className="h-10 mr-2" />
      </diiv>
      <div className="flex items-center ">
       <img src={profile} alt="Home" className="h-6 ml-4 cursor-pointer" />
        <img src={setting} alt="Settings" className="h-6 ml-4 cursor-pointer" />
        <img src={notification} alt="Notifications" className="h-6 ml-4 cursor-pointer bg-blue-700" />
        <img src={profileImage} alt="Profile" className="h-8 w-8 rounded-full ml-4 cursor-pointer" />
        <div className="ml-4 cursor-pointer text-xl text-blue-600" style={{ transform: 'rotate(90deg)' }} >...</div>
      </div>
    </div>
  )
}

export default Navbar
