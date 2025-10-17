import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

export default function Checkout() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        address: '',
        email: '',
        phone: '',
        additionalInfo: '',
        createAccount: true
    });





    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Order placed successfully!');
    };

    const { cart, totalQuantity, totalPrice } = useSelector((state) => state.allcart);

    return (
        <div style={{ background: "linear-gradient(to right, #ef7c33, #d79a74ff)", marginTop: "0px" }}>


            <Container className="p-5"  >
                <Row>
                    <Col md={8} className="mb-4">
                        <Card className="mb-4">
                            <Card.Header className="py-3">
                                <h5 className="mb-0">Billing details</h5>
                            </Card.Header>
                            <Card.Body>
                                <Form onSubmit={handleSubmit}>
                                    <Row className="mb-4">
                                        <Col>
                                            <Form.Group>
                                                <Form.Label>First name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group>
                                                <Form.Label>Last name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleInputChange}
                                                    required
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Form.Group className="mb-4">
                                        <Form.Label>Company name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleInputChange}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-4">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-4">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-4">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-4">
                                        <Form.Label>Additional information</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={4}
                                            name="additionalInfo"
                                            value={formData.additionalInfo}
                                            onChange={handleInputChange}
                                        />
                                    </Form.Group>



                                    <div className="d-grid gap-2 mt-4">
                                        <Button type="submit" size="lg">
                                            Make purchase
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4} className="mb-4">
                        <Card className="mb-4">
                            <Card.Header className="py-3">
                                <h5 className="mb-0">Summary</h5>
                            </Card.Header>
                            <Card.Body>
                                <ListGroup variant="flush">
                                    {
                                        cart.map((data) => (
                                            <div key = {data.id} style={{ backgroundColor: "#f8f8f8", width: "100%", height: "100px", padding: "5px", marginBottom: "10px" }}>

                                                <div className="d-flex justify-content-start">
                                                    <img src={data.image} style={{ backgroundSize: "Cover", height: "90px" }} alt={data.name || 'Product'} />

                                                    <div style={{ marginLeft: "10px" }}>


                                                        <p>Qty:{data.quantity}</p>
                                                        <p>$ total price :- {data.price * (data.quantity || 1)}</p> {/* Calculate total price */}

                                                    </div>




                                                </div>




                                            </div>
                                        ))
                                    }
                                    <ListGroup.Item className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Subtotal( {totalQuantity} items)
                                        <span>₹ {totalPrice}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Tax's
                                        <span>₹ {2.7}</span>
                                    </ListGroup.Item>

                                    <ListGroup.Item className="d-flex justify-content-between align-items-center px-0">
                                        Shipping
                                        <span>₹ {10.29}</span>
                                    </ListGroup.Item>





                                    <ListGroup.Item className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                        <div>
                                            <strong>Total amount</strong>
                                            <p className="mb-0">(including VAT)</p>
                                        </div>
                                        <span><strong>$ {totalPrice + 12.98}</strong></span>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}