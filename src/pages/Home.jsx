import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../Hooks/useFetch';
import { addtoWishList } from '../Redux/wishlistSlice';
import { useDispatch } from 'react-redux';
import { addtocart } from '../Redux/cartSlice';

export default function Home() {
  const response = useFetch('https://fakestoreapi.com/products');
  console.log(response);
  const dispatch = useDispatch(); 
  
  return (
    <>
    <Row className='m-5'>
      {
        response?.length>0?
        response.map((items)=>(
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
            <Button variant="outline-danger" onClick={()=>dispatch(addtoWishList(items))}><i class="fa-solid fa-heart"></i></Button>
            <Button variant="outline-success"  onClick={()=>dispatch(addtocart(items))} ><i class="fa-solid fa-cart-shopping"></i></Button>
            </div>
           
          </Card.Body>
        </Card>
    
          </Col>

        ))
        :
        <div><p>No items found</p></div>
      }
     
    </Row>
    
    </>
  )
}
