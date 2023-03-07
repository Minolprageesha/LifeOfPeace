import React, { useEffect, useState, useContext } from "react";
import "../../components/assets/css/core.css";
import "../../components/assets/css/style12.css";
import "../../components/assets/css/style1.css";
import "../../components/assets/css/home.css";
import { toast } from "react-toastify";
toast.configure();
import "react-toastify/dist/ReactToastify.css";
import logo from "../../components/assets/images/sad.svg";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



const FinalResultPage: React.FC = () => {

    return (


        <section className="account-page-area section-gap-equal">
            <div className="containerLogin position-relative">
                <div className="row g-5 justify-content-center">
                    <div className="col-lg-7">
                        <h3 className="title">Result</h3>
                        <p className="mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ex, ipsa incidunt facere laudantium id quibusdam optio dolorum eveniet laboriosam necessitatibus debitis voluptatibus officia, culpa error? Ullam dolorem praesentium illo!</p>
                        <div style={{ width: 200, height: 200 }}>
                            <CircularProgressbar value={66} />
                        </div>

                        <p className="mt-40">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ex, ipsa incidunt facere laudantium id quibusdam optio dolorum eveniet laboriosam necessitatibus debitis voluptatibus officia, culpa error? Ullam dolorem praesentium illo!</p>
                    </div>
                    <div className="col-lg-5">
                        <a href="/home"><img src={logo} alt="" /></a>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default FinalResultPage;
