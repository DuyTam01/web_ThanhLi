import React from 'react'
import { Link } from 'react-router-dom'


export default function Register() {
    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign Up</h3>
                    
                    <div className="form-group mt-3">
                        <label>Full Name</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Lê Duy Tâm"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Email Address"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Password"
                        />
                        <p className="text-right mt-2">
                        Forgot <a href="#">password?</a>
                    </p>
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <Link to='/web_ThanhLi/home'className="text-center mt-3" >
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                        </Link>
                        
                    </div>
                    <p className="text-center mt-3">
                        If you already have an account, please login 
                        <Link to="/web_ThanhLi/signin"> here?</Link>
                    </p>
                    
                </div>
            </form>
        </div>
    )
}

