import React from 'react'

function Card ({ img, title, description, price, rate, count }) {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <div className='flex justify-center'>
        <img className='' src={`${img}`} alt={`${title}`} />
      </div>
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{`${title}`}</div>
        <p className='text-gray-700 text-base'>
          {`${description}`}
        </p>
      </div>
      <div className='px-6 pt-4 pb-2'>
        <span className='flex justify-center bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2'>${price}</span>
      </div>
    </div>
  )
}

export default Card
