import React, { useEffect, useState, useContext } from "react";
import "../../components/assets/css/core.css";
import "../../components/assets/css/style12.css";
import "../../components/assets/css/style1.css";
import "../../components/assets/css/home.css";
import { toast } from "react-toastify";
toast.configure();
import "react-toastify/dist/ReactToastify.css";
import logo from "../../components/assets/images/login.svg";
import { Input } from "reactstrap";

const Login: React.FC = () => {


    return (


        <section className="account-page-area section-gap-equal">
            <div className="containerLogin position-relative">
                <div className="row g-5 justify-content-center">
                    <div className="col-lg-6">
                        <a href="/home"><img src={logo} alt="" /></a>
                    
                    </div>
                    <div className="col-lg-5">
                        <div className="login-form-box">
                            <h3 className="title">Sign in</h3>
                            <p>Don’t have an account? <a href="/signup">Sign up</a></p>
                            <form>
                                <div className="form-group">
                                    <label >Username or email*</label>
                                    <input type="email" name="current-log-email" id="current-log-email" placeholder="Email or username" />
                                </div>
                                <div className="form-group">
                                    <label >Password*</label>
                                    <input type="password" name="current-log-password" id="current-log-password" placeholder="Password" />
                                    <span className="password-show"><i className="icon-76"></i></span>
                                </div>
                                <div className="form-group chekbox-area">
                                    <div className="edu-form-check">
                                        <input type="checkbox" id="remember-me" />
                                        <label >Remember Me</label>
                                    </div>
                                    <a href="#" className="password-reset">Lost your password?</a>
                                </div>
                                <div className="form-group">
                                    <button type="button" className="edu-btn btn-medium">Sign in <i className="icon-4"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* // <div className="login-page">
        //     <div className="row  justify-content-center">
        //         <div className="col-lg-6">
        //             <img src={logo} alt="" />
        //         </div>
        //         <div className="col-lg-6">
        //             <div className="row g-5 mb-20 justify-content-center login-right">
        //                 <div className="col-lg-12">
        //                     <div className="form-group">
        //                         <label>Username*</label>
        //                         <Input
        //                             type="text"
        //                             className="buyerInfoInput form-control"
        //                             id="formrow-firstname-Input"
        //                             maxLength={35}
        //                             value={""}
        //                             name="Username"
        //                             required
        //                         />
        //                     </div>
        //                 </div>
        //                 <div className="col-lg-12">
        //                     <div className="form-group">
        //                         <label >Password*</label>
        //                         <Input
        //                             type="password"
        //                             className="buyerInfoInput form-control"
        //                             id="formrow-firstname-Input"
        //                             value={ ""}
        //                             name="Password"
        //                             required
        //                         />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //     </div>
        // </div> */}
            </div>
        </section>
    );
};

export default Login;
