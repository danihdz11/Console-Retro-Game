import React from 'react'

function RightControl() {
  return (
    <div className='w-[100px] h-[250px] border-4 border-solid bg-red-500'>
      <div className='w-6 h-6 flex items-center justify-center relative'>
        <div className='absolute w-1 h-4 bg-black'></div>
        <div className='absolute w-4 h-1 bg-black'></div>
      </div>
    
      <div className='grid grid-cols-3 grid-cols-3 gap-2 mt-1'>
        <button className='col-start-2 row-start-1 cursor-pointer w-7 h-7 rounded-full border-4 border-black-500 flex items-center justify-center hover:bg-gray-500'>X</button>
        <button className='col-start-1 row-start-2 cursor-pointer w-7 h-7 rounded-full border-4 border-black-500 flex items-center justify-center'>Y</button>
        <button className='col-start-2 row-start-3 cursor-pointer w-7 h-7 rounded-full border-4 border-black-500 flex items-center justify-center'>B</button>
        <button className='col-start-3 row-start-2 cursor-pointer w-7 h-7 rounded-full border-4 border-black-500 flex items-center justify-center'>A</button>
      </div>
      <div className='w-20 h-20 rounded-full border-5 border-black-500'></div>
      
      <div className='w-6 h-6 rounded-full border-2 border-black-500'></div>
      <div className='w-5 h-5 border-2 border-black-500'></div>

    </div>
  )
}

export default RightControl