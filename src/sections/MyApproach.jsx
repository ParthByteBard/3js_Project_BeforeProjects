

import React from 'react'

const MyComponent = () => {
  return (
    <div className='p-10 flex flex-col items-center justify-center min-h-screen bg-black'>
      <h1 className='text-4xl text-yellow-400 my-5 font-bold tracking-wide'>
        My Learning Philosophy
      </h1>

      {/* Step 1 Card */}
      <div className='border-white border-2 rounded-xl p-6 my-8 sm:w-[550px] sm:text-center bg-[rgb(4,0,27)] shadow-lg 
                      hover:shadow-[0_0_15px_5px_rgba(255,215,0,0.7)] hover:scale-105 hover:-translate-y-2 
                      transition-all duration-300 ease-in-out'>
        <p className='mb-3 text-xl font-semibold text-gray-300'>STEP 1:</p>
        <p className='text-lg text-gray-200'>
          I follow the <span className='text-green-400 font-bold'>Pareto Principle</span>, focusing on the 20% of content that provides 80% of the value.
        </p>
      </div>

      {/* Step 2 Card */}
      <div className='border-white border-2 rounded-xl p-6 my-8 sm:w-[550px] sm:text-center bg-[rgb(4,0,27)] shadow-lg 
                      hover:shadow-[0_0_15px_5px_rgba(255,215,0,0.7)] hover:scale-105 hover:-translate-y-2 
                      transition-all duration-300 ease-in-out'>
        <p className='mb-3 text-xl font-semibold text-gray-300'>STEP 2:</p>
        <p className='text-lg text-gray-200'>
          I develop <span className='text-orange-400 font-bold'>micro-projects</span> to practice and deepen my understanding of the tech stack.
        </p>
      </div>

      {/* Step 3 Card */}
      <div className='border-white border-2 rounded-xl p-6 my-8 sm:w-[550px] sm:text-center bg-[rgb(4,0,27)] shadow-lg 
                      hover:shadow-[0_0_15px_5px_rgba(255,215,0,0.7)] hover:scale-105 hover:-translate-y-2 
                      transition-all duration-300 ease-in-out'>
        <p className='mb-3 text-xl font-semibold text-gray-300'>STEP 3:</p>
        <p className='text-lg text-gray-200'>
          Once I've mastered the basics, I embark on a journey of <span className='text-rose-500 font-bold'>building larger projects</span> to apply the remaining 80% of my knowledge.
        </p>
      </div>
    </div>
  )
}

export default MyComponent


