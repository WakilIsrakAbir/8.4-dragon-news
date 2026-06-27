import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className="text-center bg-blue-200 h-screen flex justify-center items-center flex-col gap-4">
        <h1 className='text-red-500 text-5xl font-bold'>You are on wrong path!</h1>
        <p className='text-black-500 text-xl font-bold'>Please check your url and try again. <br /> Or,</p>

        <Link href="/" className="btn btn-secondary">Go Back to Home</Link>
    </div>
  )
}

export default NotFound