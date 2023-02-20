import React, { useEffect, useState, useContext } from "react";
import "../assets/css/style1.css";
import "../assets/css/core.css";
import { Col, Row, Container, Card, CardBody, Input, Label, Form, FormGroup } from "reactstrap";


const Settings: React.FC = () => {



    return (
        <React.Fragment>
            <div className="main-container0001 ">
                <Container fluid className="mt-50 ">

                    <CardBody className="fluid-container">
                        <div className="row">
                            <div className="title mb-15  col-md-6 col-sm-12 mb-20 ">
                                <h6 className="cardHearder">Settings</h6>
                            </div>
                            <Row>
                                <Col className="d-flex justify-content-end mb-5">

                                </Col>
                            </Row>
                         
                        </div>
                    </CardBody>

                </Container >
            </div >
        </React.Fragment >
    );
};

export default Settings;
