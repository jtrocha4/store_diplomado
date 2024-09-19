import React from 'react'
import FormDiscount from '../components/FormDiscount'

function GetYourDiscount () {
  return (
    <div>
      <h1 className='text-2xl'>Obtén tu descuento</h1>
      <section className='my-7'>
        <article className='my-7 text-center'>
          <h3 className='font-semibold text-lg m-2'>¡Regístrate y obtén un 15% de descuento en tu próxima compra!</h3>
          <p>¿Te encanta ahorrar? ¡Nosotros también! Regístrate hoy en <span className='font-semibold'>Store</span> y recibe un 15% de descuento en tu próxima compra.</p>
        </article>
        <FormDiscount />
      </section>
    </div>
  )
}

export default GetYourDiscount
