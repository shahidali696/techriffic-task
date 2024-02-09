import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../core/actions/authActions';
import Logo from '../resource/logo.png'
import { Navbar, Nav, NavDropdown, FormControl, Button, Form } from 'react-bootstrap';

function NavBar() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem('token');
    };

    return (
        <nav className="navbar navbar-expand-lg bg-yello text-white h-black pt-3">
            <div className="container d-no-flex txt-white">
                <div className='row d-flex justify-content-between w100 txt-white'>
                    <div className='col-lg-1 col-sm-7 col-md-2'>
                        <Link className="navbar-brand" to="/"> <img src={Logo} width="100px" alt='' /></Link>
                    </div>
                    <div className='col-lg-1 col-sm-5 col-md-2'>
                        <div class="dropdown inline">
                            <button class="btn btn-light1 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">

                                <a class="dropdown-item" href="#"><i class="fas fa-flag mr-2"></i>  <img src="https://f.nooncdn.com/s/app/com/common/images/flags/ae.svg" alt="country-ae" class="mr-2" /> Dubai</a>
                            </button>

                        </div>
                    </div>
                    <div className='col-lg-8 col-sm-8 col-md-5'>
                        <input type='text' placeholder='What are you looking for?' className='form-control mr-sm-2' />
                    </div>
                    <div className='col-lg-2 col-sm-4 col-md-3'>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                {isAuthenticated ? (
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/products">Products</Link>
                                        </li>
                                        <li className="nav-">
                                            <button className="btn bg-white h-black " onClick={handleLogout}>Logout</button>
                                        </li>
                                    </>
                                ) : (
                                    <div>

                                        <li className="nav">
                                            <Link className="btn bg-white h-black m-1 " to="/login">Login</Link>
                                            <Link className="btn bg-white h-black  m-1" to="/register">Register</Link>
                                        </li>
                                        <li className="nav-item">
                                        </li>
                                    </div>

                                )}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    );
}

export default NavBar;
