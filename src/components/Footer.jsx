import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <div style={{ width: "100%", height: "300px" }}
                className='d-flex justify-content-center align-items-center flex-column mt-5 bg-primary'>
                <div className='d-flex justify-content-evenly aling-items-center mb-5 w-100' style={{ color: "white" }}>
                    <div style={{ width: "400px" }}>
                        <h4><i class="fa-solid fa-cart-shopping  me-3"></i>E-KART</h4>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Similique commodi, dolorem dicta velit voluptas a veniam provident nulla ipsam saepe,
                            possimus, officia culpa iste molestiae explicabo porro sed perferendis vel.</h6>

                    </div>
                    <div className='d-flex flex-column'>
                        <h4>Links</h4>
                        <Link to={'/'} style={{ textDecoration: "none", color: "white" }} >Home</Link>
                        <Link to={'/cart'} style={{ textDecoration: "none", color: "white" }} >Cart</Link>
                        <Link to={'/wishlist'} style={{ textDecoration: "none", color: "white" }} >Wishlist</Link>

                    </div>
                    <div className='d-flex flex-column' >
                        <h4>Guides</h4>
                        <Link to={'https://react.dev'} target='_blank' style={{ textDecoration: "none", color: "white" }}>React</Link>
                        <Link to={'https://react-bootstrap.netlify.app'} target='_blank' style={{ textDecoration: "none", color: "white" }}>React-Bootstrap</Link>
                        <Link to={'https://bootswatch.com'} target='_blank' style={{ textDecoration: "none", color: "white" }}>Boots watch</Link>

                    </div>

                    <div>
                        <h4>Contact</h4>
                        <div className='d-flex'>
                            <input type="text" className='form-control' name="" id="" placeholder='Enter Email Id' />
                            <button className='btn btn-warning ms-2'>subscribe</button>
                        </div>
                        <div className='d-flex justify-content-evenly mt-3'>
                        <Link style={{ textDecoration: "none", color: "white" }}><i class="fa-brands fa-instagram fa-2x"></i></Link>
                        <Link style={{ textDecoration: "none", color: "white" }}><i class="fa-brands fa-facebook fa-2x"></i></Link>
                        <Link style={{ textDecoration: "none", color: "white" }}><i class="fa-brands fa-twitter fa-2x"></i></Link>
                        <Link style={{ textDecoration: "none", color: "white" }}><i class="fa-brands fa-reddit fa-2x"></i></Link>

                    </div>
                    </div>
                </div>

                <p style={{color:"white"}}>Copyright &#169; 2024 E-Kart built with React Redux</p>
                

            </div>

        </>
    )
}
