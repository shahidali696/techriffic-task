import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { loginSuccess } from '../core/actions/authActions';

function Register() {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const [message, setMessage] = useState("")

    const { firstName, lastName, email, password } = formData;

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/user/create', formData);
            console.log(response)
            const { user, message } = response.data
            if (user) {
                dispatch(loginSuccess({ user }));
                setMessage(message)
            }
            setMessage(message)
        } catch (error) {
            console.error('Registration failed:', error.response.data);
        }
    };

    return (
        <div className="container mt-5 c-50">
            <div className="card shadow">
                <div className="card-body">
                    <h2 className="card-title text-center mb-4">Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input type="text" name="firstName" value={firstName} onChange={handleChange} className="form-control" placeholder="First Name" required />
                        </div>
                        <div className="mb-3">
                            <input type="text" name="lastName" value={lastName} onChange={handleChange} className="form-control" placeholder="Last Name" required />
                        </div>
                        <div className="mb-3">
                            <input type="email" name="email" value={email} onChange={handleChange} className="form-control" placeholder="Email" required />
                        </div>
                        <div className="mb-3">
                            <input type="password" name="password" value={password} onChange={handleChange} className="form-control" placeholder="Password" required />
                        </div>
                        <button type="submit" className="btn btn-primary w-100 mb-3">Register</button>
                        <h5 className="text-center">{message}</h5>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
