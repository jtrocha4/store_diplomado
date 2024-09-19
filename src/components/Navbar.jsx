import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-white grid grid-cols-3 py-4 px-4 border-b-2'>
      <div className='flex justify-start'>
        <Link to='/'>
          <span className='text-lg font-medium'>Store</span>
        </Link>
      </div>
      <div className='flex justify-center gap-4'>
        <Link to='/products' className='text-base font-medium leading-6 text-gray-900'>Productos</Link>
        <Link to='/get-your-discount' className='text-base font-medium leading-6 text-gray-900'>Descuento</Link>
      </div>
    </nav>
  )
}

export default Navbar
