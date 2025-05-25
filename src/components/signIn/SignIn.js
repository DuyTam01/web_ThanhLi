import React from 'react'
import "../../css/signin.css"
import { Link } from 'react-router-dom'
export default function SignIn() {
    return (
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                        <div className="form-group mt-3">
                            <label className='text-uppercase'>Email address</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter email"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label className='text-uppercase'>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                            />
                            <p className="forgot-password text-right mt-2">
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
                        <p className="sign-up text-center mt-2">
                        If you do not have an account, please register <Link to="/web_ThanhLi/register">here?</Link>
                        </p>

                        
                    </div>
                </form>
            </div>

    )
}
