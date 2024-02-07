import React, { useEffect, useState } from 'react';
import productService from '../core/services/productService';
import authService from '../core/reducers/authService';
import AddProductForm from './AddProduct';
import ProductCard from '../components/ProductCard';

function ProductList() {
    const [products, setProducts] = useState([]);
    const token = authService.getToken();
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await productService.getAll(token);
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [token]);

    const handleDelete = (productId) => {
        setProducts(products.filter(product => product.id !== productId));
    };

    const handleAddCard = (productId) => {
        setProducts(products.filter(product => product.id !== productId));
    };
    const handleAddProduct = () => {
        productService.getAll(token).then((response) => {
            setProducts(response.data);
        });
    };

    return (
        <div className="container bg-white p-5">
            <div className="row ">
                <div className="col">
                    <h5 className="float-start">Product List</h5>
                </div>
                <div className="col text-end">
                    {token ? <AddProductForm onAdd={handleAddProduct} /> : ""}
                    {/* <AddProductForm onAdd={handleAddProduct} /> */}
                </div>
            </div>
            <div className="row">
                {products.map((product) => (
                    <ProductCard product={product} token={token} handler={token ? handleDelete : handleAddCard} />
                ))}
            </div>

        </div>
    );
}

export default ProductList;
