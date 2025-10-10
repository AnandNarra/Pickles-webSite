import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Await, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleLoginAuthecition, handlepassword1, handleUserName1 } from "../../Redux/Slice/LoginSlice";

function LoginPage() {

    const navigate = useNavigate();

    const dispath = useDispatch();
    const location = useLocation();

    // const [userName, setUserName] = useState("")
    // const [password, setPassword] = useState("")

    const { userName, password, responesData, error, loading } = useSelector((state) => state.loginFrom)

    console.log("Redux State:", { userName, password, responesData, loading, error, });
     console.log("Location state:", location.state);


    useEffect(() => {
        if (responesData) {
            localStorage.setItem("authToken", responesData.access_token);
            
            // Check if there's a return URL in location state
            const redirectPath = location.state?.from || '/';
            navigate(redirectPath, { replace: true });
        }
    }, [responesData, navigate, location.state]);

    useEffect(()=>{
        if(error){

            console.error("Login failed:", error);
            // Show error message to user
            alert("Login failed! Please check your credentials.");

        }
    },[error])


    function handleUsername(event) {
        
        dispath(handleUserName1(event.target.value));
    }

    function handlePassword(event) {

        dispath(handlepassword1(event.target.value))
    }

    async function handleLoginPageDetails(event) {

        event.preventDefault();
        await dispath(handleLoginAuthecition({ userName, password })).unwrap;

        
    }
        



    return (
            <>
                <section className=" gradient-custom" >
                    <div className="container py-5 " >
                        <div className="row d-flex justify-content-center align-items-center " >
                            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                <div className="card bg-dark text-white" style={{ borderRadius: "1rem", backgroundColor: "#eb5b00", }} >
                                    <div className="card-body p-5 text-center">

                                        <form onSubmit={handleLoginPageDetails}>
                                            <div className="mb-md-5 mt-md-4 pb-5">

                                                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                                <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                                <div className="form-outline form-white mb-4">

                                                    <label className="form-label" htmlFor="typeNameX">Name</label>
                                                    <input
                                                        type="text"
                                                        name="username"
                                                        id="typeNameX"
                                                        className="form-control form-control-lg"

                                                        onChange={handleUsername}
                                                        autoComplete="username"
                                                        placeholder="Enter your Name"
                                                        required
                                                    />

                                                </div>

                                                <div className="form-outline form-white mb-4">
                                                    <label className="form-label" htmlFor="typePasswordX">Password</label>
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        id="typePasswordX"
                                                        className="form-control form-control-lg"

                                                        onChange={handlePassword}
                                                        autoComplete="current-password"
                                                        placeholder="password"
                                                        required
                                                    />

                                                </div>

                                                <p className="small mb-5 pb-lg-2">
                                                    <a className="text-white-50" href="#!">Forgot password?</a>
                                                </p>

                                                <button className="btn btn-outline-light btn-lg px-5" type="submit">
                                                    Login
                                                </button>



                                            </div>
                                        </form>

                                        <div>
                                            <p className="mb-0">
                                                Don't have an account?
                                                <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }

    export default LoginPage;