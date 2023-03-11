import React from "react";
import "../../components/assets/css/core.css";
import "../../components/assets/css/style12.css";
import "../../components/assets/css/style1.css";
import "../../components/assets/css/home.css";
import { toast } from "react-toastify";
toast.configure();
import "react-toastify/dist/ReactToastify.css";
import logo from "../../components/assets/images/login.svg";

const Signup: React.FC = () => {

    return (
        <section className="account-page-area section-gap-equal">
            <div className="containerLogin position-relative">
                <div className="row g-5 justify-content-center">
                    <div className="col-lg-6">
                        <a href="/home"><img src={logo} alt="" /></a>

                    </div>
                    <div className="col-lg-5">
                        <div className="login-form-box">
                            <h1 className="title">Sign Up</h1>
                            <p>Already have an account? <a href="/signin">Sign In</a></p>
                            <form>

                                <div className="form-group mb-4">
                                    <label >Select Role*</label>
                                    <select className="form-group f-14">
                                        <option selected>Sign up as...</option>
                                        <option value="CLIENT">Client</option>
                                        <option value="DOCTOR">Doctor</option>
                                    </select>

                                </div>

                                <div className="form-group">
                                    <label >Email*</label>
                                    <input type="email" name="current-log-email" id="current-log-email" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <label >Phone Number</label>
                                    <input type="email" name="current-log-email" id="current-log-email" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <label >Password*</label>
                                    <input type="password" name="current-log-password" id="current-log-password" placeholder="Password" />
                                    <span className="password-show"><i className="icon-76"></i></span>
                                </div>
                        
                                <div className="form-group">
                                    <div >
                                        <input type="checkbox" />
                                        <label >I agree the User Agreement and <a href="/">Terms & Condition.</a> </label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button type="button" className="edu-btn btn-medium">Sign Up <i className="icon-4"></i></button>
                                </div>
                                <input type="checkbox" className="form-group"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;
