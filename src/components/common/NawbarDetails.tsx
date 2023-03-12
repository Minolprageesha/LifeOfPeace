import React from "react";
import "../assets/css/home.css";
import "../assets/css/core.css";
import "../assets/css/bootstrap.min.css";

const NavBarDashbord: React.FC = () => {

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
                        <div className="navbar-other flex ms-lg-4 aliganItem">
                            <div className="btn-main "> Details</div>
                            <div className="btn-sub "> Chat</div>
                            <div className="btn-sub "> Exercise</div>
                            <div className="btn-sub "> Blog</div>
        
                            <div className="form-group">
                                <button type="button" className="edu-btn btn-medium">Log Out <i className="icon-4"></i></button>
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

export default NavBarDashbord;
