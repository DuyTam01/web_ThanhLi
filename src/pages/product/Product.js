import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import "../../css/products.css"
import Products from '../../components/products/Products'

export default function Product() {
  return (
    <div>
      <Header />
      <Products/>
      <Footer />

      <a href="#" id="back-to-top" class="backtop" title="Lên đầu trang"><i class="fa fa-angle-up"></i></a>
    </div>
  )
}
