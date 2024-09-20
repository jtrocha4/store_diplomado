import React from 'react'

const Card = ({ img, title, description, price, rate, count, discountedPrice }) => {
  return (
    <div className='max-w-sm w-full h-auto rounded border-2 overflow-hidden shadow-xl flex flex-col justify-between'>
      <div className='flex justify-center h-2/3 mt-4'>
        <img className='w-2/3 h-full object-contain' src={`${img}`} alt={`${title}`} />
      </div>
      <div className='px-6 py-4'>
        <h3 className='font-semibold text-xl mb-2'>{`${title}`}</h3>
        <p className='text-gray-700 text-base'>
          {`${description}`}
        </p>
      </div>
      <div className='px-6 pt-4 pb-4 mt-auto'>
        <span className='flex justify-center bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          {
            (discountedPrice !== null)
              ? (
                <>
                  <span className='line-through text-red-400'>${price}</span>
                  <span className='ms-2'>${discountedPrice}</span>
                </>
                )
              : (
                <span>${price}</span>
                )
          }
        </span>
      </div>
    </div>
  )
}

export default Card
