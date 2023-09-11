import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className='flex flex-col gap-3 justify-center items-center w-full h-screen'>
      <h2>No page found</h2>
      <Link to="/">Go to Home</Link>
    </div>
  )
}

export default Error404
