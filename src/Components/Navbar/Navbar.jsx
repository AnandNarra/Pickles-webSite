import React, { useEffect } from "react";
import '../Navbar/Navbar.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../Redux/Slice/cartSlice";





function Navbar() {

    
    const {cart , totalQuantity} = useSelector((state) => state.allcart)

    const dispatch = useDispatch()

    

     useEffect(() =>{
    
            dispatch(getCartTotal());
    
        } , [cart]);

 const navigate = useNavigate();

 function handlelogout(){
    localStorage.removeItem("authToken")
    navigate("/")
 }

    return (
        <>
            {/* navbar-container */}
            <div className="navbar-container">


                {/* nav bar image section */}
                <div>
                    <h1>Amma Ruchulu</h1>
                </div>

                {/* navbar link  */}
                <div >
                    <div className="navbar-links-container">
                        <Link to="/" className="link-elements-in-navbar-container">Home</Link>

                        <Link to="/products" className="link-elements-in-navbar-container">Products</Link>

                        <Link to="/about" className="link-elements-in-navbar-container">About Us</Link>

                        <Link to="/contact" className="link-elements-in-navbar-container">Contact</Link>

                    </div>
                </div>

                {/* cart section */}

                <div >
                   <button onClick={() => navigate('/loginPage')}>
                        Login
                    </button>

                    <button onClick={handlelogout}>Logout</button>
                
                    <button onClick={() => navigate('/cart')}>
                        Cart({totalQuantity})
                    </button>
                </div>

            </div>

        </>
    )
}

export default Navbar

