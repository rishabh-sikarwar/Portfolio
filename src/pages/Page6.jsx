import React from 'react'

const page6 = () => {
  return (
    <div className='bg-emerald-400 flex items-center justify-center '>
      <video src="/src/assets/Robot.mp4" autoPlay loop muted className='object-cover relative'></video>
      <img src="/src/assets/react.png" alt=""  className='absolute object-cover h-[100vh]'/>
    </div>
  )
}

export default page6