import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { loginSuccess, saveToken } from '../core/actions/authActions';
import axios from 'axios';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4000/api/auth/login', formData).then((res) => {
                console.log(res);
                const { user, access_token } = res.data;
                dispatch(loginSuccess({ user, access_token }));
                dispatch(saveToken(access_token));
                localStorage.clear();
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem("token", JSON.stringify(access_token));
                navigate("/products");
            })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.error('Login failed:', error.response.data);
        }
    };

    return (
        <div className="container mt-5 c-50">
            <div className="card shadow">
                <div className="card-body">
                    <h2 className="card-title text-center mb-4">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input type="email" name="email" value={email} onChange={handleChange} className="form-control" placeholder="Email" required />
                        </div>
                        <div className="mb-3">
                            <input type="password" name="password" value={password} onChange={handleChange} className="form-control" placeholder="Password" required />
                        </div>
                        <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>
                    </form>
                </div>
            </div>
        </div>


    );
}

export default Login;
