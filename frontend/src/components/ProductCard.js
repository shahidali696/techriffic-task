import React from 'react';
import productService from '../core/services/productService';

function ProductCard({ product, token, handler }) {

    const handleAddCart = async () => {
        try {
            console.log('Product Add card successfully');
        } catch (error) {
            console.error('Error Add card product:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await productService.delete(product.id, token);
            handler(product.id);
            console.log('Product deleted successfully');
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div className="col-md-3 mb-3 product-card">
            <div className="card border-0 shadow">
                {product.url && (
                    <img src={product.url} className="card-img-center rounded-top " alt={product.name} />
                )}
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text mb-1">Type: {product.type}</p>
                    <p className="card-text mb-1">Price: ${product.price}</p>
                    {token ? <p className="card-text mb-3">{product.details}</p> : <></>}
                    {
                        token ?
                            <button className="btn btn-danger" onClick={handleDelete}>Delete</button> :
                            <div><button className="btn btn-danger" onClick={handleAddCart}>Add cart</button> <button className="btn btn-primary " to=''>View Details</button></div>

                    }

                </div>
            </div>
        </div >
    );
}

export default ProductCard;
