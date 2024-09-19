import React from 'react'

const FormDiscount = () => {
  return (
    <div>
      <form action=''>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' for='name'>
            Nombre completo
          </label>
          <input required className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='nombre' type='text' />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' for='email'>
            Correo electronico
          </label>
          <input required className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='email' type='text' />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' for='city'>
            Ciudad
          </label>
          <input required className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='city' type='text' />
        </div>
        <div className='flex justify-center'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='button'>
            Obtener descuento
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormDiscount
