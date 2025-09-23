import React, { useState } from "react";
import '../Products/Products.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/Slice/cartSlice";



function Products() {
  const [searchTerm, setSearchTerm] = useState("");

  const items = useSelector(state => state.allcart.items)

  const dispatch = useDispatch();

  // Sample product data based on your image


  // Filter products based on search term
  const filteredProducts = items.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    
    <div className="products-page">

      {/* Searchbar Container */}
      <div className="searchbar-Container">
        <div className="searchbar-Container-element">
          <input
            type="text"
            placeholder="Search products..."
            className="search-bar-element"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>




      {/* Products Section */}
      <div className="products-section-container">


        <Row className="g-4">



          {filteredProducts.map(product => (


            <Col key={product.id} xs={12} sm={6} md={3} lg={2}>
              <Card className="h-100 product-card">
                {product.discount && (
                  <div className="discount-badge">{product.discount}</div>
                )}
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="product-name">{product.name}</Card.Title>
                  <Card.Text className="product-description">
                    {product.description}
                  </Card.Text>
                  <div className="price-unit mt-auto">
                    <span className="product-price">¥-{product.price}</span>
                    {product.unit && <span className="product-unit">/{product.unit}</span>}
                  </div>
                  <div className="quantity-controls mt-2">
                    <div className="quantity-selector">
                      <button className="quantity-btn">-</button>
                      <span className="quantity">1</span>
                      <button className="quantity-btn">+</button>
                    </div>
                    <Button className="add-to-cart-btn" onClick={() => dispatch(addToCart(product))}>
                      Add to Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>


            </Col>
          ))}





        </Row>


      </div>
    </div>
  );
}

export default Products;