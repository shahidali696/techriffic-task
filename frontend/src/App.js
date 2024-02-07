import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './pages/Login';
import Register from './pages/Register';
import ProductList from './pages/ProductList';
import PrivateRoute from './core/services/PrivateRoutes';
import Home from './pages/Home'
import Navbar from "./components/NavBar";
import Footer from './components/Footer';
function App() {
  return (<div>
    <Navbar />

    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />

      <Route path="/" element={<PrivateRoute />}>
        <Route path="/products" element={<ProductList />} />
      </Route>
    </Routes>
    <Footer />
  </div>
  );
}

export default App;


