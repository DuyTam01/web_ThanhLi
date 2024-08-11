import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearItem, removeItem } from '../../redux/cartSlice'
import { Button, ButtonGroup, Container, Input, Table } from 'reactstrap'
import "../../css/cart.css"
import { Link } from 'react-router-dom'

export default function Cart() {
  const dispatch = useDispatch()
  const { items } = useSelector(state => state.cart)
  const [selecteIds, setSelecteIds] = useState([])
  const [isSelecteAll, setIsSelecteAll] =useState(false)
  const [arrayTotalPrice, setArrayTotalPrice] = useState([])
  const handleSelecteAll=()=>{
       const newIsSelecteAll = !isSelecteAll
       setIsSelecteAll(newIsSelecteAll)
       if (newIsSelecteAll){
        setSelecteIds(items.map((item)=>item.id))
        setArrayTotalPrice(items.map((item)=>item.price))
       }
       else{
        setSelecteIds([])
        setArrayTotalPrice([])
       }
  }
  const handleChangeRow=(id, price) =>{
    let updateSelecteIds;
    let updateArrayTotalPrice;

    if  (!selecteIds.includes(id)){
      //thêm id vào mảng
      updateSelecteIds= [...selecteIds,id]
      updateArrayTotalPrice= [...arrayTotalPrice, price]
      console.log(selecteIds.includes(items.id));
    }
    else{
      //Lọc ra bản ghi có id khác với id cần remove
      updateSelecteIds = selecteIds.filter((row) => row !== id)
      updateArrayTotalPrice = arrayTotalPrice.filter((row) => row !== price)
    }
    //Cập nhật lại state cho selecteIds
    setSelecteIds(updateSelecteIds)
    setArrayTotalPrice(updateArrayTotalPrice)
    
    //nếu mảng selecteIds. length = items.length =>setIsSelecteAll(true)
    setIsSelecteAll(updateSelecteIds.length === items.length)
  }

  const sumprice = arrayTotalPrice.reduce((total, value) => {
    return total + value;
}, 0);
console.log(selecteIds);


  return (
    <div>
      <Container>
      <Link to="/web_ThanhLi/product">
      <Button className='mt-2'> 
      <i className='fa fa-reply text-dark '></i>
      </Button>
      </Link>
        {/* {/* <h2>Carts</h2> */}
        {/* {items.length === 0 && <h5>Cart is empty</h5>}  */}
        <Table>
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>
                <Input type='checkbox' checked={isSelecteAll} onChange={handleSelecteAll}></Input>
              </th>
              <th>
                {/* Image */}
              </th>
              <th>
                Name
              </th>
              <th>
                Price
              </th>
              {/* <th>
                Quality
              </th> */}
              <th>

              </th>
            </tr>
          </thead>
          <tbody>
            {
              items.map((item, index) => (
                <tr key={item.id} className={`${selecteIds.includes(item.id) ? "table-success":""}`}  >
                  <td scope="row">
                    {/* {item.id} */}
                    {index + 1}
                  </td>
                  <td>
                    <Input type="checkbox" checked={selecteIds.includes(item.id)}  onChange={()=>handleChangeRow(item.id, item.price)}/>                
                  </td>
                  <td>
                    <img src={item.link} />

                  </td>
                  <td>
                    {item.productDisplayName}
                  </td>
                  <td>
                    {item.price}
                  </td>
                  {/* <td>
                    
                                     // <Button onClick={()=>updateByID(item.id, -1)}> - </Button> 
                                     // <span>{" " + item.quality+" "} </span>
                                     // <Button onClick={()=>updateByID(item.id, 1)}> + </Button>

                                     <Button onClick={()=> dispatch(countUp())}> - </Button> 
                                     <span>{" " + count+" "} </span>
                                    <Button onClick={()=> dispatch(countDown())}> + </Button>
                  </td> */}
                  <td>
                    <Button className="btn-danger"  onClick={() => {dispatch(removeItem((item.id))); setSelecteIds([]) ;setIsSelecteAll(false); setArrayTotalPrice([])}}>Delete</Button>

                  </td>
                </tr>
              ))
            }
          </tbody>
        </Table>
        <div className='contain'>
          {items.length > 0 && (
            <div>
              <div className='total-price'>

                <h5>Total: <span>${sumprice}</span></h5>


              </div>
              {/* <ButtonGroup> */}
              <div className='group-btn'>

                <Button className='btn-secondary text-right mr-5' onClick={() => {dispatch(clearItem());setSelecteIds([]) ;setIsSelecteAll(false); setArrayTotalPrice([])}}>Clear Cart</Button>
                
                <Link to='/web_ThanhLi/payment' state={[selecteIds, sumprice]} >
                <Button className='btn-pay btn-secondary'>Payments</Button>
                </Link>
                
              {/* </ButtonGroup> */}
              </div>
            </div>
          )}

        </div>

      </Container>
    </div>
  )
}
