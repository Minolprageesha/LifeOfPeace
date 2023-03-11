import React from "react";
import "../assets/css/home.css";
import "../assets/css/core.css";
import "../assets/css/bootstrap.min.css";

const NavBarMain: React.FC = () => {

    return (
        <div className="content-wrapper">
            <header className="wrapper bg-light">
                <nav className="navbar navbar-expand-lg classNameic transparent position-absolute navbar-light">
                    <div className="container flex-lg-row flex-nowrap align-items-center">
                        <div className="navbar-brand w-50">
                            <a href="/home">
                                <img src="./../static/assets/img/logo.svg"
                                    style={{ width: "140px", padding: "10px 10px 10px 10px" }} alt="" />
                            </a>
                        </div>
                        <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
                            <div className="offcanvas-header d-lg-none">
                                <h3 className="text-white fs-30 mb-0"></h3>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
                                <div className="offcanvas-footer d-lg-none">
                                    <div>
                                        <a href="mailto:first.last@email.com" className="link-inverse">info@email.com</a>
                                        <br /> 00 (123) 456 78 90 <br />
                                        <nav className="nav social social-white mt-4">
                                            <a href="#"><i className="uil uil-twitter"></i></a>
                                            <a href="#"><i className="uil uil-facebook-f"></i></a>
                                            <a href="#"><i className="uil uil-dribbble"></i></a>
                                            <a href="#"><i className="uil uil-instagram"></i></a>
                                            <a href="#"><i className="uil uil-youtube"></i></a>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="navbar-other flex ms-lg-4 aliganItem">
                            <div className="btn-main "> Home</div>
                            <div className="btn-sub "> Blog</div>
                            <div className="btn-sub "> FAQ</div>
                            <div className="btn-sub "> Contact Us</div>
                            <div className="form-group">
                                <button type="button" className="edu-btn btn-medium">Sign in <i className="icon-4"></i></button>
                            </div>

                        </div>

                    </div>
                </nav>

                <div className="offcanvas offcanvas-top bg-light" id="offcanvas-search" data-bs-scroll="true">
                    <div className="container d-flex flex-row py-6">
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default NavBarMain;
