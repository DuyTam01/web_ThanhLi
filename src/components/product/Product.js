import "../../css/productDetail.css"
import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardSubtitle, Col, CardTitle, CardImg, ButtonGroup } from 'reactstrap'
import { useDispatch, } from "react-redux"
import { addItem } from "../../redux/cartSlice"


export default function Product(props) {
    const dispatch = useDispatch()
    const { product } = props

    return (
        <Col lg={3} md={4} sm={6} xs={6} className=''>
            <Card>

                <CardBody >
                    <Link to={`/web_ThanhLi/detail/${product.id}`}>
                        <CardImg
                            alt="Card image cap"
                            src={product.link}
                            top
                            width="100%"
                        />
                        <CardTitle tag="h6" >
                            {product.productDisplayName}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            color="danger"
                            tag="h6"
                        >
                            $ {product.price}
                        </CardSubtitle>
                    </Link>
                    {/* <Button onClick={ ()=>dispatch(addItem(product))}> Add cart</Button> */}
                    <ButtonGroup>
                        <Link>
                            <Button className="btn-secondary  " onClick={() => dispatch(addItem(product))}>
                                Add cart
                            </Button>
                        </Link>

                        <Link to="/web_ThanhLi/cart">
                            <Button className='btn-secondary ' onClick={() => dispatch(addItem(product))}>Buy</Button>
                        </Link>
                    </ButtonGroup>
                </CardBody>

            </Card>
        </Col>

    )
}

