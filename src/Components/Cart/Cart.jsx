import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseItemQuantity, getCartTotal,increaseItemQuantity,removeItem } from "../../Redux/Slice/cartSlice";
import { useNavigate } from "react-router-dom";
// import DeleteIcon from '@mui/icons-material/Delete';

function Cart() {

    const navigate = useNavigate()

    const { cart, totalQuantity, totalPrice } = useSelector((state) => state.allcart);

    const dispatch = useDispatch()

    useEffect(() =>{

        dispatch(getCartTotal());

    });

    

    const handleCheckout = () =>{
        navigate('/checkout');

    }

    



    

    return (
        <>
            <section className="h-100 gradient-custom" style={{ background: "linear-gradient(to right, #ef7c33, #d79a74ff)" }}>
                <div className="container py-5">
                    <div className="row d-flex justify-content-center my-4">
                        <div className="col-md-8">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Cart - {cart.length} items</h5>
                                </div>
                                <div className="card-body">
                                    {
                                    cart.map((data) => (
                                        <div key={data.id} className="row"> {/* Added key prop */}
                                            <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                                    <img src={data.image}
                                                        className="w-100" alt={data.title} /> {/* Use actual product title */}
                                                    
                                                </div>
                                            </div>

                                            <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                                <p><strong>{data.name}</strong></p> {/* Use actual product title */}
                                                <p>Category: {data.category}</p> {/* Use actual product data */}
                                                <p>Price: ${data.price}</p> {/* Use actual product price */}
                                                <button type="button" className="btn btn-primary btn-sm me-1 mb-2" title="Remove item" onClick={()=>dispatch(removeItem(data.id))}>
                                                    
                                                    <h6>Delete</h6>
                                                </button>
                                                
                                            </div>

                                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                                {/* Quantity */}
                                                <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                                                    <button className="btn btn-primary px-3 me-2" onClick={()=>dispatch(decreaseItemQuantity(data.id))}>
                                                        <h3>-</h3>
                                                    </button>

                                                    <div className="form-outline">
                                                        <label className="form-label" htmlFor={`quantity-${data.id}`}>
                                                            Quantity
                                                        </label>
                                                        <input 
                                                            id={`quantity-${data.id}`} 
                                                            min="0" 
                                                            name="quantity" 
                                                            value={(data.quantity || 1)} 
                                                            type="number" 
                                                            className="form-control"
                                                             onChange={() => null}
                                                        />
                                                        
                                                    </div>

                                                    <button className="btn btn-primary px-3 ms-2" onClick={()=>dispatch(increaseItemQuantity(data.id))}>
                                                        <h3>+</h3>
                                                    </button>
                                                </div>
                                                {/* Quantity */}

                                                {/* Price */}
                                                <p className="text-start text-md-center">
                                                    <strong>$ total price :- {data.price * (data.quantity || 1)}</strong> {/* Calculate total price */}
                                                </p>
                                                {/* Price */}
                                            </div>
                                            <hr className="my-4" />
                                        </div>
                                    ))}

                                    {
                                    cart.length === 0 && (
                                        <div className="text-center">
                                            <p>Your cart is empty</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <p><strong>Expected shipping delivery</strong></p>
                                    <p className="mb-0">12.10.2020 - 14.10.2020</p>
                                </div>
                            </div>
                            <div className="card mb-4 mb-lg-0">
                                <div className="card-body">
                                    <p><strong>We accept</strong></p>
                                    <img className="me-2" width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                                        alt="Visa" />
                                    <img className="me-2" width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                                        alt="American Express" />
                                    <img className="me-2" width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                                        alt="Mastercard" />
                                    <img className="me-2" width="45px"
                                        src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
                                        alt="PayPal acceptance mark" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Summary</h5>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Total Quantity
                                            <span>{totalQuantity}</span> {/* Use actual quantity */}
                                        </li>
                                        
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong>Total amount</strong>
                                            </div>
                                            <span><strong>${totalPrice}</strong></span> {/* Use actual total price */}
                                        </li>
                                    </ul>

                                    <button type="button" className="btn btn-primary btn-lg btn-block" onClick={handleCheckout}>
                                        Go to checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart;