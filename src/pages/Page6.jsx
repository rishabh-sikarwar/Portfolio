import React from 'react'
import robot from '../assets/Robot.mp4'
import react from '../assets/react.png'

const page6 = () => {
  return (
    <div className='bg-emerald-400 flex items-center justify-center '>
      <video src={robot} autoPlay loop muted className='object-cover relative'></video>
      <img src={react} alt=""  className='absolute object-cover h-[100vh]'/>
    </div>
  )
}

export default page6