import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { emptyCart, removeFromcart } from '../Redux/cartSlice';


export default function Cart() {
  const cartItem = useSelector((state) => state.cartReducer)
  console.log('cart items');
  console.log(cartItem);
  const dispatch = useDispatch();
  //hook used to navigate to a particular path or page
  const navigate= useNavigate()
  const [Total,setTotal]=useState(0)
  const getTotal = ()=>{
    let sum=0;
    cartItem.forEach((item)=>{
      sum+= item.price;
    })
    setTotal(sum)

  }
  useEffect(()=>{
    getTotal();
  },[cartItem])

  const handleCart= ()=>{
    alert('thank you... Your order has been placed.......')
    dispatch(emptyCart())
    navigate('/')
  }

  return (
    <>
      <Link to={'/'}> <button className='btn btn-primary m-5'><i class="fa-solid fa-arrow-left me-2"></i> Back to home</button>
      </Link>

      <div className='mt-4'>

        {
          cartItem?.length > 0 ?
            <div className='row w-100 '>
              <div className='col-lg-6 m-5 '>

                <Table striped bordered hover className='border shadow p-5'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product name</th>
                      <th>image</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  {
                    cartItem.map((item, index) => (
                      <tbody>
                        <tr>
                          <td>{index + 1}</td>
                          <td>{item.title}</td>
                          <td><img src={item.image} alt="" style={{ width: "50px", height: "50px" }} /></td>
                          <td>₹ {item.price}</td>
                          <td><Button variant="outline-danger" onClick={() => dispatch(removeFromcart(item.id))} ><i class="fa-solid fa-trash"></i></Button></td>
                        </tr>

                      </tbody>
                    ))
                  }
                </Table>

              </div>
              <div className='col-lg-4'>
                <div className='border shadow p-5'>
                  <h3 className='text-primary'>Cart Summary</h3>
                  <h5>Total number of products: <span className='text-warning fw-bolder'>{cartItem?.length}</span></h5>
                  <h5>Total price: <span className='text-warning fw-bolder'> ₹ {Total}</span></h5>
                  <button className='btn btn-success rounded w-100' onClick={handleCart}>CHECKOUT</button>
                </div>
              </div>
            </div>

            : <div><h3 className='text-danger fw-bolder m-5'>Your cart is Empty</h3></div>


        }


      </div>



    </>
  )
}
