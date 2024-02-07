import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import productService from '../core/services/productService';

function AddProductForm({ onAdd }) {
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [url, setUrl] = useState('');
    const [details, setDetails] = useState('');
    const [price, setPrice] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));
        const userId = user ? user.id : null;
        const productData = { name, type, url, details, price, userId }
        productService.create(productData).then(() => {
            onAdd();
            handleClose();
        });
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Product
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formProductName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter product name" value={name} onChange={(e) => setName(e.target.value)} required />
                        </Form.Group>
                        <Form.Group controlId="formProductType">
                            <Form.Label>Type</Form.Label>
                            <Form.Control type="text" placeholder="Enter product type" value={type} onChange={(e) => setType(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formProductUrl">
                            <Form.Label>URL</Form.Label>
                            <Form.Control type="text" placeholder="Enter product URL" value={url} onChange={(e) => setUrl(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formProductDetails">
                            <Form.Label>Details</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter product details" value={details} onChange={(e) => setDetails(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formProductPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" placeholder="Enter product price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default AddProductForm;
