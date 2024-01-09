import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/Home/HomePage'
import { ProductList } from '../pages/Products/ProductList'
import { ProductDetail } from '../pages/ProductDetail'

export const AllRoutes = () => {
  return (
   <>
   <Routes>
    <Route  path='/' element={<HomePage></HomePage>} />
    <Route  path='/products' element={<ProductList></ProductList>} />
    <Route  path='products/:id' element={<ProductDetail></ProductDetail>} />
   
  
        
    
   </Routes>
   </>
  )
}
