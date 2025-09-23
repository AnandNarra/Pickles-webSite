import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkedAlt } from 'react-icons/fa';
import "../Contact/Contact.css"

function Contact(){

    function handleSubmit(){
        console.log("anand");
    }
    function formData(){
        console.log("anand");
    }
    function handleChange(){
        console.log("anand");
    }
    return(
        <>
        <div>
            <div style={{ textAlign: "center" }}>
                    <div>


                        <h1 style={{margin:"20px"}}>Contact Us</h1>
                        <div style={{ width: "100px", height: "5px", backgroundColor: "#16a34a", borderRadius: "20px", margin: "auto" ,}}></div>
                        <p style={{margin:"20px"}}>Have questions about our products or services? We're here to help!</p>
                    </div>

                    
                </div>
        

        

      {/* Contact Section */}
      <div style={{backgroundColor:"#fff"}}>
      <section className="contact-section">
        <div className="container">
          <div className="contact-container">
            <div className="contact-info"> 


              <h3 style={{marginBottom:"20px"}}>Get in Touch</h3>
              
              
              
              
              <div className="info-item">
                <div className="info-icon">
                  <FaPhoneAlt />
                </div>
                <div className="info-text">
                  <h4>Phone Number</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div className="info-text">
                  <h4>Email Address</h4>
                  <p>hello@picklesworkproject.com</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-text">
                  <h4>Address</h4>
                  <p>4-7-62/2,Shivaji nagar,Attapur,Hyderabad-500048</p>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <h3>Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    
                    onChange={handleChange}
                    placeholder="Your Name" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here" 
                    required 
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="map-container">
            <div className="map-placeholder">
              <FaMapMarkedAlt className="map-icon" />
              <span>Interactive Map Location</span>
            </div>
          </div>
        </div>
      </section>

      </div>

      </div>
        </>
    )
}

export default Contact;