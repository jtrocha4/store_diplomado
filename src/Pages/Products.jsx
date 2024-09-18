import React from 'react'
import Card from '../components/Card'

function Products ({ products }) {
  return (
    <div>
      <h1>Productos</h1>
      <section className='my-7 grid grid-cols-3'>
        {
          products.map(({ id, image, title, description, price }) => (
            <Card key={id} img={image} title={title} description={description} price={price} />
          ))
        }
      </section>
    </div>
  )
}

export default Products
