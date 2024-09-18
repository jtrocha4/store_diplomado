import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Products from './Pages/Products'
import GetYourDiscount from './Pages/GetYourDiscount'
import { useEffect, useState } from 'react'

function App () {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const data = await fetch('https://fakestoreapi.com/products')
    const res = await data.json()
    setProducts(res)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <Router>
        <Navbar />
        <section className='my-4 py-4 px-4'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products products={products} />} />
            <Route path='/get-your-discount' element={<GetYourDiscount />} />
          </Routes>
        </section>
      </Router>
    </>
  )
}

export default App
