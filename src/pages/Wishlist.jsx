import React from 'react'
import { useSelector } from 'react-redux'
import {Row,Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFromWishlist } from '../Redux/wishlistSlice';
import { addtocart } from '../Redux/cartSlice';

export default function Wishlist() {
  const wishlistItem = useSelector((state)=>state.wishlistReducer)
  console.log('wishlist items');
  console.log(wishlistItem);
  const dispatch = useDispatch(); 
  const handlewishlist=(items)=>{
    dispatch(addtocart(items))
    dispatch(removeFromWishlist(items.id))

  }
  
  return (
    <>
    <Link to={'/'}> <button className='btn btn-primary m-5'><i class="fa-solid fa-arrow-left me-2"></i> Back to home</button>
    </Link>
    <Row className='m-5'>
      {
        wishlistItem?.length>0?
        wishlistItem.map((items)=>(
          <Col sm={12} md={6} lg={4} xl={3} className='mb-3'>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={items.image} height={'200px'} className='p-3'/>
          <Card.Body>
            <Card.Title>{items.title.slice(0,20)}... </Card.Title>
            <Card.Text>
            {items.description.slice(0,100)}...
            <p className='fw-bolder mt-2'>Price: &#x20B9;{items.price}</p>
            </Card.Text>
            <div className='d-flex align-items-center justify-content-between'>
            <Button variant="outline-danger" onClick={()=>dispatch(removeFromWishlist(items.id))} ><i class="fa-solid fa-trash"></i></Button>
            <Button variant="outline-success" onClick={()=>handlewishlist(items)}><i class="fa-solid fa-cart-shopping"></i></Button>
            </div>
           
          </Card.Body>
        </Card>
    
          </Col>

        ))
        :
        <div><h3 className='text-danger fw-bolder'>Your Wishlist is Empty</h3></div>
      }
     
    </Row>
    
    
    </>
  )
}
