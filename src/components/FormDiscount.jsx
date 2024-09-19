import React, { useState } from 'react'

const FormDiscount = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    city: ''
  })

  const [emptyForm, setEmptyForm] = useState(false)

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.city.trim()) {
      setEmptyForm(true)
    }
  }

  return (
    <div>
      {emptyForm && (
        <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative' role='alert'>
          <strong className='font-bold'>Lo siento, </strong>
          <span className='block sm:inline'>por favor diligencie todos los campos para obtener el descuento</span>
          <span className='absolute top-0 bottom-0 right-0 px-4 py-3'>
            <svg className='fill-current h-6 w-6 text-red-500' role='button' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
              <title>Close</title>
              <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z' onClick={() => { setEmptyForm(false) }} />
            </svg>
          </span>
        </div>
      )}
      <form action='' onSubmit={handleSubmit} className='my-4'>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
            Nombre completo
          </label>
          <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='name' name='name' type='text' onChange={handleChange} />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
            Correo electronico
          </label>
          <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='email' name='email' type='email' onChange={handleChange} />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='city'>
            Ciudad
          </label>
          <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='city' name='city' type='text' onChange={handleChange} />
        </div>
        <div className='flex justify-center'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
            Obtener descuento
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormDiscount
