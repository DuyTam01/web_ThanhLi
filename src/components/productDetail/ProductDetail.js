import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import { Button, Container } from 'reactstrap';
import "../../css/productDetail.css"
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cartSlice';

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const dispatch = useDispatch()
  useEffect(() => {
    fetchData();
  }, [])
  const url = "https://66a07b197053166bcabb88dd.mockapi.io/products"
  const fetchData = () => {
    axios.get(url + "/" + id)
      .then(function (res) {
        setProduct(res.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return (
    <Container>
      <Link to="/web_ThanhLi/product">
        <Button className='mt-2'>
          <i className='fa fa-reply text-dark '></i>
        </Button>
      </Link>
      <div class="row">
        <img
          class="col-sm-4"
          alt="Card"
          src={product.link}
        />
        <div class="col-sm-8">
          <h1>{product.productDisplayName}</h1>
          <p>Gender:<span class="text-primary"> {product.gender}</span></p>
          <p>Color:<span class="text-primary"> {product.baseColour}</span></p>
          <p>Year:<span class="text-primary"> {product.year}</span></p>
          <h4> ${product.price}</h4>
          <Button className="btn-secondary " onClick={() => dispatch(addItem(product))}>
          Add cart
          </Button>
          <Link to="/web_ThanhLi/cart">
            <Button className='btn-secondary ' onClick={() => dispatch(addItem(product))}>Buy</Button>
          </Link>
        </div>
      </div>







    </Container>
  )
}
