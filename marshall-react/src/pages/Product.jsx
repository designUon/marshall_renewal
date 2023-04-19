import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ProductContextProvider from '../context/ProductContext'
import ProductList from './ProductList'

import ProductSlide from '../components/ProductSlide'

import '../css/product.css'

export default function Product() {

  return (
    <div className='product_wrap'>
      <iframe className="main_video" src="https://player.vimeo.com/video/751569210?quality=720p?autoplay=1&amp;loop=1&amp;background=1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen=""></iframe>
      <ProductSlide />

      {/* <ProductContextProvider> */}
        <ProductList />
      {/* </ProductContextProvider> */}

    </div>
  )
}
