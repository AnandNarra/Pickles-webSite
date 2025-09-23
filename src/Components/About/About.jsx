import React from "react";

import img1 from '../Images/vegPickles.jpg'
import "../About/About.css"
import { useAuth } from "../AuthProvider/AuthProvider";
import Counter from "../Counter/Counter";

function About() {

    // const {obj , userName} = useAuth();

    return (
        <>
            <div style={{ backgroundColor: "#f9fafb", }}>


                

                <div style={{ textAlign: "center" }}>
                    <div>


                        <h1 style={{margin:"20px"}}>About Us</h1>
                        <div style={{ width: "100px", height: "5px", backgroundColor: "#16a34a", borderRadius: "20px", margin: "auto" ,}}></div>
                        <p style={{margin:"20px"}}>Learn more about our mission and values</p>
                    </div>

                    
                </div>

                <Counter/>

                <div >

                    <div className='tagline-section' style={{marginBottom:"0px"}} >
                        <div className='tagline-container' style={{ backgroundColor: "white", color: "black" }}>
                            <div className='tagline-content'>
                                <h2>Our Story</h2>
                                <br />
                                <p style={{ textAlign: "left" }}>Founded with a vision to revolutionize the way people access and enjoy their daily essentials, we've grown from a small startup to a trusted name in the industry. Our journey has been driven by innovation, customer satisfaction, and a commitment to quality.</p>
                                <p style={{ textAlign: "left" }}>We believe in making life easier for our customers while maintaining the highest standards of service and product quality. Our team works tirelessly to ensure that every interaction with our platform is seamless and enjoyable.</p>

                            </div>
                            <div className='tagline-image-container '>
                                <img src={img1} className='tagline-image' alt="Pickle showcase" />
                            </div>

                            


                            

                            <div className="About-container-section">

                                <div className="row">

                                

                                

                                <div className="About-container-section-Our-Mission  col-12 col-sm-6 col-md-4">

                                    <div className="About-container-section-Our-Mission-image-container">
                                        <img src="https://cdn-icons-png.flaticon.com/128/7198/7198217.png" className="About-container-section-Our-Mission-image" />

                                    </div>

                                    <h3>Our Mission</h3>
                                    <p>To provide convenient, reliable, and high-quality services that enhance our customers' daily lives while maintaining sustainable business practices.</p>
                                </div>

                                <div className="About-container-section-Our-Mission  col-12 col-sm-6 col-md-4" >

                                    <div className="About-container-section-Our-Mission-image-container">
                                        <img src="https://cdn-icons-png.flaticon.com/128/7653/7653862.png" className="About-container-section-Our-Mission-image" />
                                    </div>
                                    <h3>Our Vision</h3>
                                    <p>To become the leading platform for essential services, setting new standards in customer experience and service delivery.</p>
                                </div>

                                <div className="About-container-section-Our-Mission  col-12 col-sm-6 col-md-4">
                                    <div className="About-container-section-Our-Mission-image-container">

                                        <img src="https://cdn-icons-png.flaticon.com/128/18866/18866935.png" className="About-container-section-Our-Mission-image" />

                                    </div>

                                    <h3>Our Values</h3>
                                    <p>Integrity, innovation, customer focus, and sustainability are the core values that guide our every decision and action.</p>
                                </div>






                            </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About;