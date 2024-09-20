import React, { useContext } from 'react'
import Card from '../components/Card'
import { DiscountContext } from '../context/discount'

function Products ({ products }) {
  const { discount } = useContext(DiscountContext)

  const applyDiscount = (discount, price) => {
    let res = null
    if (discount !== 0) {
      res = ((price) - (price * discount)).toFixed(2)
    }
    return res
  }

  const prueba = applyDiscount(discount, 400000)
  console.log(prueba)

  return (
    <div>
      <h1 className='text-2xl '>Productos</h1>
      <section className='my-7 grid grid-cols-3 gap-y-4'>
        {
          products.map(({ id, image, title, description, price }) => (
            <Card key={id} img={image} title={title} description={description} price={price} discountedPrice={applyDiscount(discount, price)} />
          ))
        }
      </section>
    </div>
  )
}

export default Products
