import React, { useState } from 'react'
import { Container, Row } from 'reactstrap'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, fetchProduct } from '../../redux/productSlice';
import Product from '../product/Product';
import Pagination from "react-js-pagination";
// import ReactPaginate from 'react-paginate';

export default function Products() {
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)
  const { products, totalPage, status, error } = useSelector(state => state.products)
  useEffect(() => {
    if (status === "start") {
      dispatch(fetchProduct(currentPage))
    }
  }, [currentPage, deleteProduct])
  if (status === "loading") {
    return <div>Loading.....</div>
  }
  if (status === "failed") return <div>{error}</div>

  const handlePageChange = (pageNumber) => {
    console.log("page" + pageNumber )  
    setCurrentPage(pageNumber)
  }

  return (
    <Container>
      <Row>
        {
          products.map((item, index) => (
            <Product key={index} product={item} />
          ))
        }
      </Row>
      <Pagination
        activePage={currentPage}
        itemsCountPerPage={12}
        totalItemsCount={100}
        pageRangeDisplayed={3}
        onChange={handlePageChange}
      />

      
    </Container>
  )
}
