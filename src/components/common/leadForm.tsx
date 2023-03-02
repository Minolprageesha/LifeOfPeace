import React, { useState, useRef, useEffect } from "react";
import { useHistory, } from "react-router-dom";
import logo from "../../components/assets/images/login.svg";
import "../assets/css/home.css";
import "../assets/css/bootstrap.min.css";

const LeadForm: React.FC = () => {

    const [leadData, setLeadData] = useState({});
    const [startDate, setStartDate] = useState(new Date());
    const leadDataRef = useRef<any>();
    leadDataRef.current = leadData;

    const firstComponent = () => {
        return (
            <div>
                <h4 className="fs-20 ls-sm">1.How often have you been bothered by feeling down, depressed, irritable, or hopeless over the
                    last two weeks?</h4>
            </div >
        );
    };



    const secondComponent = () => {
        return (
            <div>
                <h3 className="title mb-20">Account Information</h3>
            </div>
        );
    };


    const finalComponent = () => {
        return (
            <div>
                <h3 className="title mb-20">Profile Information</h3>

            </div>
        );
    };

    const [steps, setSteps] = useState([
        { key: "firstStep", label: "STEP", isDone: true, component: firstComponent },
        { key: "secondStep", label: "STEP", isDone: false, component: secondComponent },
        { key: "finalStep", label: "STEP", isDone: false, component: finalComponent },
    ]);


    const [activeStep, setActiveStep] = useState(steps[0]);

    const history = useHistory();

    const handleNext = () => {
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
                        <div className="col-lg-8">
                            <div className="App">
                                <div className="box">
                                    <div className="step-component">{activeStep.component()}</div>
                                    <div className="btn-component">
                                        {steps[0].key !== activeStep.key && (
                                            <button className="btn colorchangeback back-btn btn-medium" onClick={handleBack}>
                                                Back
                                            </button>
                                        )}

                                        <button
                                            className={steps[steps.length - 1].key !== activeStep.key ? "btn colorchangeLog leadMargin edu-btn btn-medium" : "btn colorchangeLog edu-btn btn-medium"}
                                            value={steps[steps.length - 1].key !== activeStep.key ? "Next" : "Get"}
                                            onClick={handleNext}
                                        >
                                            {" "}
                                            <div>  {steps[steps.length - 1].key !== activeStep.key ? "Next" : "Submit and Check Out"} <i className="dw dw-right-arrow right_arrow_icon"></i>{" "}</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <a href="/home"><img src={logo} alt="" /></a>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default LeadForm;
