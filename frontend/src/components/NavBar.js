import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../core/actions/authActions';
import Logo from '../resource/logo.png'
function Navbar() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem('token');
    };

    return (
        <nav className="navbar navbar-expand-lg bg-yello text-white h-black">
            <div className="container txt-white">
                <Link className="navbar-brand" to="/"> <img src={Logo} width="100px" alt='' /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
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
                                <li className="nav-item">
                                    <button className="btn bg-white h-black " onClick={handleLogout}>Logout</button>
                                </li>
                            </>
                        ) : (
                            <div>

                                <li className="nav-item">
                                    <Link className="btn bg-white h-black  m-1" to="/login">Login</Link>
                                    <Link className="btn bg-white h-black " to="/register">Register</Link>
                                </li>
                                <li className="nav-item">
                                </li>
                            </div>

                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
