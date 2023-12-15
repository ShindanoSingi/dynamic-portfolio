import React from 'react'
import './Loader.css'

function Loader() {
  return (
    <div className='grid bg-[--primary-color] place-content-center h-[100vh] w-full'>
      <div className="loader"></div>
    </div>
  )
}

export default Loader