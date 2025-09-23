import React, { useState } from "react";

function LoginPage() {

    const[userName ,setUserName] = useState("")
    const [password ,setPassword] =useState("")
    
    function handleUsername(event){
        // setuserName(event.target.value)
        // console.log(event)

        console.log("UserName", event.target.value)
        setUserName(event.target.value)

    }

    function handlePassword(event){
        console.log("password" ,event.target.value)
        setPassword(event.target.value)

    }

function handleLoginPageDetails(){
    console.log("userDetailes",userName,password)
    

}    

    

    return (
        <>
            <section className=" gradient-custom" >
                <div className="container py-5 " >
                    <div className="row d-flex justify-content-center align-items-center " >
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white" style={{ borderRadius: "1rem",backgroundColor:"#eb5b00",  }} >
                                <div className="card-body p-5 text-center">

                                    <form >
                                        <div className="mb-md-5 mt-md-4 pb-5">

                                            <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                            <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                            <div className="form-outline form-white mb-4">
                                                <input 
                                                    type="text" 
                                                    name="username"
                                                    id="typeNameX" 
                                                    className="form-control form-control-lg" 
                                                    
                                                    onChange={handleUsername}
                                                    autoComplete="username"
                                                    placeholder="Enter your Name"
                                                />
                                                <label className="form-label" htmlFor="typeNameX">Name</label>
                                            </div>

                                            <div className="form-outline form-white mb-4">
                                                <input 
                                                    type="password" 
                                                    name="password"
                                                    id="typePasswordX" 
                                                    className="form-control form-control-lg" 
                                                    
                                                    onChange={handlePassword}
                                                    autoComplete="current-password"
                                                    placeholder="password"
                                                />
                                                <label className="form-label" htmlFor="typePasswordX">Password</label>
                                            </div>

                                            <p className="small mb-5 pb-lg-2">
                                                <a className="text-white-50" href="#!">Forgot password?</a>
                                            </p>

                                            <button className="btn btn-outline-light btn-lg px-5" onClick={handleLoginPageDetails}>
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