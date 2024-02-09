import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function Banner() {
    return (
        <div className='row d-md-'>
            <Navbar bg="light" expand="lg" >
                <div className='col-lg-2 col-sm-7 col-md-2'>
                    <Navbar.Collapse id="basic-navbar-nav " className='d-md- justify-content-md-center text-uppercase bold h-black'>
                        <Nav className="mr-auto">
                            <NavDropdown title="All Categories" id="basic-nav-dropdown" className='border-right h-black'>
                                <NavDropdown.Item href="#action/3.1" className='text-uppercase h-black'><span> Electronic</span></NavDropdown.Item>

                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='d-md- justify-content-md-center'>
                    <Nav className="ml-auto">
                        {[...Array(15)].map((_, index) => (
                            <Nav.Link href="#link1" className='text-uppercase bold h-black'><span>Menu {index + 1} </span></Nav.Link>
                        ))}

                    </Nav>
                </Navbar.Collapse>
            </Navbar>


        </div>
    );
}

export default Banner;
