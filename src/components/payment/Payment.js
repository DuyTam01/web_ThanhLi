import React, {  useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Col, Container, Form, FormGroup, Input, Label, Row, Table } from 'reactstrap';
import { deleteProduct } from '../../redux/productSlice';
import emailjs from '@emailjs/browser';
import "../../css/payment.css"
import { clearItem } from '../../redux/cartSlice';

export default function Payment() {
  const location = useLocation();
  // const { items } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector(state => state.cart.items) || []
  // Lấy selectedIds từ state nếu nó tồn tại
  const [selectedIds, sumprice] = location.state ? location.state : [];
  console.log(selectedIds);
  console.log(sumprice);
  const deleteItem = () => {
    selectedIds.forEach(id => {
      dispatch(deleteProduct(id));
    });
  };
  
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_2d1ej8f', 'template_t5gipm8', form.current, {
        publicKey: 'rhIyxFbF5E8iHQxO9',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    deleteItem()
    dispatch(clearItem())
    navigate('/web_ThanhLi/thanks');

    // window.location.reload(5)
  }

  return (
    <div>
      <Container id='contain-payment'>
        < h1 className='text-center mt-5  text-danger text-uppercase '>
          <strong>Purchase information</strong>
        </h1>
        <Row>
          <Col xs="7">
            <form ref={form} onSubmit={sendEmail}>
              <label>Name:</label><br />
              <input id='text' type="text" name="user_name" placeholder="Le Duy Tam" required/><br />
              <label>Email:</label><br />
              <input id='text' type="email" name="user_email" placeholder="example@gmail.com" required/><br />
              <label>Phone Number::</label><br />
              <input id='text' type="phone" name="user_phoneNumer" placeholder="0xxxxxxxxx" required/><br />
              <label>Address:</label><br />
              <input id='text' type="address" name="user_address" placeholder="135 Hai Ba Trung Street" required /><br /><br />
              <input type="submit" value="Submit" className='bg-secondary'/>
            </form>
          </Col>
          <Col xs="5">
            <Table>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {
                  selectedIds.map(id => {
                    // Lọc các item dựa trên selectedIds
                    const filteredItems = items.filter(item => item.id === id);
                    return filteredItems.map((item, index) => (
                      <tr key={item.id}>
                        <td>
                          <img src={item.link} alt={item.productDisplayName} style={{ width: '50px', height: '50px' }} />
                        </td>
                        <td>{item.productDisplayName}</td>
                        <td>{item.price}</td>
                      </tr>
                    ));
                  })
                }
              </tbody>
            </Table>
            {selectedIds.length !== 0 && <h5>Total: <span>${sumprice}</span></h5>}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
