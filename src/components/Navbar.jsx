import React from 'react'
import { Link } from 'react-router-dom'

function Navbar () {
  return (
    <nav className='bg-white grid grid-cols-3 py-4 px-4 border-b-2'>
      <div className='flex justify-start'>
        <Link to='/'>
          <span>Store</span>
        </Link>
      </div>
      <div className='flex justify-center gap-4'>
        <Link to='/products' className='text-sm font-semibold leading-6 text-gray-900'>Productos</Link>
        <Link to='/get-your-discount' className='text-sm font-semibold leading-6 text-gray-900'>Descuento</Link>
      </div>
    </nav>
  )
}

export default Navbar
