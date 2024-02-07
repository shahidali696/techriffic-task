import axios from 'axios';
const API_URL = 'http://localhost:4000/api';

const productService = {
    getAll: (token) => axios.get(`${API_URL}/products`, { headers: { Authorization: `Bearer ${token}` } }),
    getById: (id, token) => axios.get(`${API_URL}/products/${id}`, { headers: { Authorization: `Bearer ${token}` } }),
    create: (productData, token) => axios.post(`${API_URL}/products`, productData, { headers: { Authorization: `Bearer ${token}` } }),
    update: (id, productData, token) => axios.put(`${API_URL}/products/${id}`, productData, { headers: { Authorization: `Bearer ${token}` } }),
    delete: (id, token) => axios.delete(`${API_URL}/products/${id}`, { headers: { Authorization: `Bearer ${token}` } }),
};

export default productService;
