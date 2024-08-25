import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Dashboard from '../../Pages/Dashboard'
import About from '../../Pages/About'
import Products from '../../Pages/Products'
import Carousel from '../../Components/Carousel'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import ProductCard from '../../Components/ProductCard'

const AppRouter = () => {
  return (
    <Routes>
      {/* <Route path='/' element={<ProductCard />} /> */}
      <Route path='/' element={<Dashboard />} />
      <Route path='/contact' element={<About />} />
      <Route path='/products' element={<Products />} />


    </Routes>)
}

export default AppRouter