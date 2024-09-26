import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';
import {  useSelector } from 'react-redux'


export default function Header() {
    //useSelector hook is used to access state available in store
    const wishlist = useSelector((state) => state.wishlistReducer)

    const cart = useSelector((state)=>state.cartReducer)

    
    
    return (
        <>
            <Navbar expand="lg" className="bg-primary">
                <Container>

                    <Navbar.Brand >
                        <Link to={'/'} style={{ color: "white", textDecoration: "none" }}><i class="fa-solid fa-cart-shopping fa-bounce me-3"></i> E-KART</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link ><Link to={'/cart'} style={{ color: "white", textDecoration: "none" }}>
                                CART <Badge bg="secondary" className='ms-1'>{cart?.length}</Badge> </Link></Nav.Link>

                            <Nav.Link  > <Link to={'/wishlist'} style={{ color: "white", textDecoration: "none" }}>
                                WISHLIST <Badge bg="secondary" className='ms-1'>{wishlist?.length}</Badge>  </Link> </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}
