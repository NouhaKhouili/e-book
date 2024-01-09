import React from 'react'
import { Hero } from './components/Hero'
import { FeaturedPrducts } from './components/FeaturedPrducts'
import { Testimonials } from './components/Testimonials'
import { Faq } from './components/Faq'
import { useTitle } from '../../hooks/useTitle'

export const HomePage = () => {
  useTitle('Home')
  return (
    <main>
      <Hero></Hero>
      <FeaturedPrducts></FeaturedPrducts>
      <Testimonials></Testimonials>
      <Faq></Faq>
      
    </main>
  )
}
