import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import img1 from '../Images/vegPickles.jpg'

import img2 from '../Images/Non-vegPickles.jpg'
import img3 from '../Images/leaf-vegPickles.jpg'

import Button from 'react-bootstrap/Button';

import "../Home/Home.css"

import Card from 'react-bootstrap/Card';

import vegimg from "../Images/Explore-categories/vegPickles.jpeg"
import NonVegimg from "../Images/Explore-categories/Non-vegPickles.jpeg"
import Sweets from "../Images/Explore-categories/Sweets.jpeg"
import Hots from "../Images/Explore-categories/Hots.jpeg"
import Chips from "../Images/Explore-categories/Chips.jpeg"
import Ingredients from "../Images/Explore-categories/Ingredients.jpeg"


function Home() {

    const exploreContainer = [
        {
            image: vegimg,
            title: "Veg Pickles"
        },
        {
            image: NonVegimg,
            title: "Non-Veg Pickles"
        },
        {
            image: Sweets,
            title: "Sweets"
        },
        {
            image: Hots,
            title: "Hots"
        },
        {
            image: Chips,
            title: "Chips"
        },
        {
            image: Ingredients,
            title: "Ingredients"
        },

    ]

     // New product data array
    const newProducts = [
        {
            id: 1,
            name: "Green Chilli Pickle",
            description: "Spicy and tangy, our green chilli pickle adds a fiery kick to every...",
            price: "₹187",
            rating: "4.8",
            reviews: "120",
            image: vegimg
        },
        {
            id: 2,
            name: "Ginger Pickle",
            description: "Handmade fresh ginger pickle with authentic spices.",
            price: "₹220",
            rating: "4.9",
            reviews: "85",
            image: NonVegimg
        },
        {
            id: 3,
            name: "Ghana Methi Pickle",
            description: "Traditional fenugreek pickle made with natural ingredients.",
            price: "₹150",
            rating: "4.7",
            reviews: "95",
            image: Sweets
        },
        {
            id: 4,
            name: "Brinjal Pickle",
            description: "Eggplant pickle made using traditional methods.",
            price: "₹250",
            rating: "4.9",
            reviews: "150",
            image: Hots
        },
        {
            id: 5,
            name: "Garlic Pickle",
            description: "Flavorful garlic pickle made from fresh cloves.",
            price: "₹180",
            rating: "4.8",
            reviews: "110",
            image: Chips
        }, {
            id: 6,
            name: "Green Chilli Pickle",
            description: "Spicy and tangy, our green chilli pickle adds a fiery kick to every...",
            price: "₹187",
            rating: "4.8",
            reviews: "120",
            image: vegimg
        },
         {
            id: 7,
            name: "Green Chilli Pickle",
            description: "Spicy and tangy, our green chilli pickle adds a fiery kick to every...",
            price: "₹187",
            rating: "4.8",
            reviews: "120",
            image: vegimg
        },

        {
            id: 8,
            name: "Ginger Pickle",
            description: "Handmade fresh ginger pickle with authentic spices.",
            price: "220",
            rating: "4.9",
            reviews: "85",
            image: NonVegimg
        },
    ]

    // Split products into chunks for carousel (4 products per slide)
    const chunkArray = (array, chunkSize) => {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize));
        }
        return result;
    };

    const productChunks = chunkArray(newProducts, 4);


    // Taglines data
    const taglines = [
        "Ma Amma Ruchulu Pickles – A Taste of Tradition in Every Bite!",
        "Ma Amma Ruchulu Pickles – All Types, All Tastes, All Love!",
        "From Our Home to Yours – Ma Amma Ruchulu Pickles.",
        "Ma Amma Ruchulu – Authentic Pickles, Just Like Mom Makes.",
        "Every Jar, a Flavorful Memory – Ma Amma Ruchulu Pickles.",
        "Andariki Kavalsina Avakaya Ikkada ready!"
    ];

    const [currentTagline, setCurrentTagline] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTagline(prev => (prev + 1) % taglines.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [taglines.length]);


    return (

        <>

            <Carousel>
                <Carousel.Item>
                    <img src={img1} className='carousel-images' />
                    <Carousel.Caption>
                        <h3>veg pickles</h3>
                        <Button variant="light">Shop</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img2} className='carousel-images' />
                    <Carousel.Caption>
                        <h3>Non-veg pickles</h3>
                        <Button variant="light">Subscribe Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img3} className='carousel-images' />
                    <Carousel.Caption>
                        <h3>leaf pickles</h3>
                        <br />
                        <Button variant="light"> Learn more </Button>
                        <br />
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* explore Categoies */}

            <div className='explore-categories-container'>

                <h2 style={{ paddingBottom: "20px" }}> Explore Categories</h2>

                <div >



                    <div className='explore-categories-images-container'>
                        <div className='row'>




                            {

                                exploreContainer.map((data) => (
                                    <div className='col-3 col-md-2 explore-categories'




                                    >

                                        <img src={data.image} className='explore-categories-images' />

                                        <p style={{ fontWeight: "600", marginTop: "10px" }}
                                        >{data.title}
                                        </p>


                                    </div>


                                ))
                            }


                        </div>


                    </div>
                </div>




            </div>

            {/* New Launches Section */}
            <div className='new-launches-section-container'>

                <div>
                    <h3>New Launches</h3>
                    <p style={{ fontWeight: "600" }} >Discover our latest pickle products</p>
                </div>

                <div>
                    
                    

                    

                      <div className="products-carousel-container">
                    <Carousel indicators={false} interval={null}>
                        {productChunks.map((chunk, index) => (
                            <Carousel.Item key={index}>
                                <div className="d-flex justify-content-around flex-wrap">
                                    {chunk.map(product => (
                                        <Card key={product.id} style={{ width: '18rem', margin: '10px' }}>
                                            <Card.Img variant="top" src={product.image} />
                                            <Card.Body>
                                                <Card.Title style={{color:"#ef7c33"}}>{product.name}</Card.Title>
                                                <Card.Text>{product.description}</Card.Text>
                                               

                                                <div>
                                                    <div>
                                                        <span className="price">{product.price}</span>
                                                    </div>
                                                    <div>

                                                        <span className="rating">
                                                        ★ {product.rating} ({product.reviews})
                                                    </span>

                                                    </div>
                                                </div>
                                                <Button variant="primary" className="mt-2">Add to Cart</Button>
                                            </Card.Body>
                                        </Card>
                                    ))}
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>


                </div>

            </div>


            





            {/* Simple and Clear Option Section - Fixed */}
            <div className='tagline-section'>
                <div className='tagline-container'>
                    <div className='tagline-content'>
                        <h2 className='tagline-title'>Simple and Clear Options:</h2>
                        <p>1. "Ma Amma Ruchulu Pickles – A Taste of Tradition in Every Bite!"</p>
                        <p>2. "Ma Amma Ruchulu Pickles – All Types, All Tastes, All Love!"</p>
                        <p>3. "From Our Home to Yours – Ma Amma Ruchulu Pickles."</p>
                        <p>4. "Ma Amma Ruchulu – Authentic Pickles, Just Like Mom Makes."</p>
                        <p>5. "Every Jar, a Flavorful Memory – Ma Amma Ruchulu Pickles."</p>
                        <p>6. "Andariki Kavalsina Avakaya ikkada ready!"</p>
                    </div>
                    <div className='tagline-image-container '>
                        <img src={img1} className='tagline-image' alt="Pickle showcase" />
                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;


