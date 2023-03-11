import React, { useState, useRef } from "react";
import { useHistory, } from "react-router-dom";
import logo from "../../components/assets/images/cover2.svg";
import "../assets/css/home.css";
import "../assets/css/bootstrap.min.css";

const LeadForm: React.FC = () => {

    const [leadData, setLeadData] = useState({});
    const leadDataRef = useRef<any>();
    leadDataRef.current = leadData;

    console.log(setLeadData);
    

    const firstComponent = () => {
        return (
            <div>
                <div id="flowBoxes" className="mb-10">
                    <div className="right active">STEP 01</div>
                    <div className="left right">STEP 02</div>
                    <div className="left right">STEP 03</div>
                    <div className="left">STEP 04</div>
                </div>
                <div className="mb-5">
                    <h4 className="fs-20 ls-sm mb-5">1.How often have you been bothered by feeling down, depressed, irritable, or hopeless over the
                        last two weeks?</h4>
                    <ul className="header-action mb-15">
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                    </ul>
                </div>

                <div className="mb-5">
                    <h4 className="fs-20 ls-sm mb-5">2.How often have you been bothered by feeling down, depressed, irritable, or hopeless over the
                        last two weeks?</h4>
                    <ul className="header-action mb-15">
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                    </ul>
                </div>

                <div className="mb-5">
                    <h4 className="fs-20 ls-sm mb-5">3.How often have you been bothered by feeling down, depressed, irritable, or hopeless over the
                        last two weeks?</h4>
                    <ul className="header-action mb-15">
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                    </ul>
                </div>
            </div >
        );
    };



    const secondComponent = () => {
        return (
            <div>
                <div id="flowBoxes" className="mb-10">
                    <div className="right">STEP 01</div>
                    <div className="left right active">STEP 02</div>
                    <div className="left right">STEP 03</div>
                    <div className="left">STEP 04</div>
                </div>
                <div className="mb-5">
                    <h4 className="fs-20 ls-sm mb-5">1.How often have you been bothered by feeling down, depressed, irritable, or hopeless over the
                        last two weeks?</h4>
                    <ul className="header-action mb-15">
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                    </ul>
                </div>

                <div className="mb-5">
                    <h4 className="fs-20 ls-sm mb-5">2.How often have you been bothered by feeling down, depressed, irritable, or hopeless over the
                        last two weeks?</h4>
                    <ul className="header-action mb-15">
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                    </ul>
                </div>

                <div className="mb-5">
                    <h4 className="fs-20 ls-sm mb-5">3.How often have you been bothered by feeling down, depressed, irritable, or hopeless over the
                        last two weeks?</h4>
                    <ul className="header-action mb-15">
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                    </ul>
                </div>
            </div >
        );
    };


    const fourthComponent = () => {
        return (
            <div>
                <div id="flowBoxes" className="mb-10">
                    <div className="right ">STEP 01</div>
                    <div className="left right">STEP 02</div>
                    <div className="left right active">STEP 03</div>
                    <div className="left">STEP 04</div>
                </div>
                <div className="mb-5">
                    <h4 className="fs-20 ls-sm mb-5">1.How often have you been bothered by feeling down, depressed, irritable, or hopeless over the
                        last two weeks?</h4>
                    <ul className="header-action mb-15">
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                    </ul>
                </div>

                <div className="mb-5">
                    <h4 className="fs-20 ls-sm mb-5">2.How often have you been bothered by feeling down, depressed, irritable, or hopeless over the
                        last two weeks?</h4>
                    <ul className="header-action mb-15">
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                    </ul>
                </div>

                <div className="mb-5">
                    <h4 className="fs-20 ls-sm mb-5">3.How often have you been bothered by feeling down, depressed, irritable, or hopeless over the
                        last two weeks?</h4>
                    <ul className="header-action mb-15">
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                    </ul>
                </div>
            </div >
        );
    };

    const finalComponent = () => {
        return (
            <div>
                <div id="flowBoxes" className="mb-10">
                    <div className="right ">STEP 01</div>
                    <div className="left right">STEP 02</div>
                    <div className="left right">STEP 03</div>
                    <div className="left active">STEP 04</div>
                </div>
                <div className="mb-5">
                    <h4 className="fs-20 ls-sm mb-5">1.How often have you been bothered by feeling down, depressed, irritable, or hopeless over the
                        last two weeks?</h4>
                    <ul className="header-action mb-15">
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                    </ul>
                </div>

                <div className="mb-5">
                    <h4 className="fs-20 ls-sm mb-5">2.How often have you been bothered by feeling down, depressed, irritable, or hopeless over the
                        last two weeks?</h4>
                    <ul className="header-action mb-15">
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                    </ul>
                </div>

                <div className="mb-5">
                    <h4 className="fs-20 ls-sm mb-5">3.How often have you been bothered by feeling down, depressed, irritable, or hopeless over the
                        last two weeks?</h4>
                    <ul className="header-action mb-15">
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                        <li className="header-btn">
                            <button className="signinup">Not At all</button>
                        </li>
                    </ul>
                </div>
            </div >
        );
    };

    const [steps, setSteps] = useState([
        { key: "firstStep", label: "STEP", isDone: true, component: firstComponent },
        { key: "secondStep", label: "STEP", isDone: false, component: secondComponent },
        { key: "fourthStep", label: "STEP", isDone: false, component: fourthComponent },
        { key: "finalStep", label: "STEP", isDone: false, component: finalComponent },
    ]);


    const [activeStep, setActiveStep] = useState(steps[0]);

    const history = useHistory();

    const handleNext = () => {
        if (steps[steps.length - 4].key === activeStep.key) {


            const index = steps.findIndex((x) => x.key === activeStep.key);
            setSteps((prevStep) =>
                prevStep.map((x) => {
                    if (x.key === activeStep.key) x.isDone = true;
                    return x;
                })
            );
            setActiveStep(steps[index + 1]);
            return;
        }

        if (steps[steps.length - 3].key === activeStep.key) {


            const index = steps.findIndex((x) => x.key === activeStep.key);
            setSteps((prevStep) =>
                prevStep.map((x) => {
                    if (x.key === activeStep.key) x.isDone = true;
                    return x;
                })
            );
            setActiveStep(steps[index + 1]);
            return;
        }

        if (steps[steps.length - 2].key === activeStep.key) {

            const index = steps.findIndex((x) => x.key === activeStep.key);

            setSteps((prevStep) =>
                prevStep.map((x) => {
                    if (x.key === activeStep.key) x.isDone = true;
                    return x;
                })
            );

            setActiveStep(steps[index + 1]);
            return;
        }

        if (steps[steps.length - 1].key === activeStep.key) {
            history.push("/result");
            return;
        }
    };

    const handleBack = () => {
        const index = steps.findIndex((x) => x.key === activeStep.key);

        if (index === 0) return;

        setSteps((prevStep) =>
            prevStep.map((x) => {
                if (x.key === activeStep.key) x.isDone = false;
                return x;
            })
        );

        setActiveStep(steps[index - 1]);
    };

    return (
        <div className="login-page">
            <section className="account-page-area section-gap-equal1">
                <div className="containerLead position-relative">
                    <div className="row g-5 justify-content-center">
                        <div className="col-lg-7">
                            <div className="App padd">
                                <div className="box">
                                    <div className="step-component">{activeStep.component()}</div>
                                    <div className="btn-component flex float-right">
                                        {steps[0].key !== activeStep.key && (
                                            <button className="colorchangeCancel mr-10  edu-btn-back btn-medium" onClick={handleBack}>
                                                Previous
                                            </button>
                                        )}

                                        <button
                                            className={steps[steps.length - 1].key !== activeStep.key ? "btn colorchangeLog  edu-btn-next btn-medium" : "btn colorchangeLog  edu-btn-next btn-medium"}
                                            value={steps[steps.length - 1].key !== activeStep.key ? "Next" : "Proceed"}
                                            onClick={handleNext}
                                        >
                                            {" "}
                                            <div>  {steps[steps.length - 1].key !== activeStep.key ? "Next" : "Proceed"} <i className="dw dw-right-arrow  right_arrow_icon"></i>{" "}</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <a href="/home" className="mt-50"><img src={logo} alt="" /></a>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default LeadForm;
