import React from 'react'

const Hero = () => {
  return (
    <div className='text-center px-4 sm:px-6 lg:px-8'>
      <button className='rounded-full bg-zinc-50 text-black p-2 mb-10 text-sm sm:text-base lg:text-lg'>
        COMING SOON
      </button>
      <div className='text-3xl sm:text-4xl lg:text-5xl'>
        <h1 className='mb-6 sm:mb-8 lg:mb-10'>
          Play Games & Earn For Free <br /> With Game Spotter
        </h1>
      </div>
      <div>
        <div className='bg-white p-2 sm:p-3 rounded-full inline-flex items-center w-full sm:w-96'>
          <input
            className='border-none bg-white flex-grow text-sm sm:text-base p-2 text-black outline-none'
            type="text"
            placeholder='Want to join us? Enter your e-mail here'
          />
          <button
            className='text-white p-2 bg-black w-1/4 ml-4 sm:ml-7'
            style={{ borderTopRightRadius: '50px', borderBottomRightRadius: "50px" }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
