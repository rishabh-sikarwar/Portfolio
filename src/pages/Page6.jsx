import React from 'react'

const Page6 = () => {
  return (
    <div className="bg-emerald-400 flex items-center justify-center ">
      <video
        src="https://res.cloudinary.com/dsrx8ljlr/video/upload/v1743395957/assets/kyw1dmwxxyyca4wy3qxx.mp4"
        autoPlay
        loop
        muted
        className="object-cover relative"
      ></video>
      <img
        src="https://res.cloudinary.com/dsrx8ljlr/image/upload/v1743395950/assets/emioppcbfyvssh59zgeb.png"
        alt=""
        className="absolute max-w-[400px] w-[50%] object-contain"
      />
    </div>
  );
}

export default Page6