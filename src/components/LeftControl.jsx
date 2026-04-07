import React from 'react'

function LeftControl() {
  return (
    <div className='w-[100px] h-[250px] border-4 border-solid back bg-sky-500'>LeftControl
        <div className='w-20 h-20 rounded-full border-4 border-blue-500'>

        </div>
        <div className='grid grid-cols-3 grid-cols-3 gap-2 mt-1'>
            <button className='col-start-1 row-start-2 cursor-pointer w-7 h-7 rounded-full border-4 border-black-500 flex items-center justify-center'>{"<"}</button>
            <button className='col-start-2 row-start-1 cursor-pointer w-7 h-7 rounded-full border-4 border-black-500 flex items-center justify-center'>^</button>
            <button className='col-start-3 row-start-2 cursor-pointer w-7 h-7 rounded-full border-4 border-black-500 flex items-center justify-center'>{">"}</button>
            <button className='col-start-2 row-start-3 cursor-pointer w-7 h-7 rounded-full border-4 border-black-500 flex items-center justify-center'>{"v"}</button>

        </div>
    </div>
  )
}

export default LeftControl