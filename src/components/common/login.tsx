import React, { useEffect, useState, useContext } from "react";
import { AuthService } from "../../servises/AuthService";
import { RequestState } from "../../RequestState";
import { NavLink, useHistory } from "react-router-dom";
import { RouteName } from "../../RouteName";
import "../../components/assets/css/core.css";
import "../../components/assets/css/style12.css";
import "../../components/assets/css/style1.css";
import { toast } from "react-toastify";
toast.configure();
import "react-toastify/dist/ReactToastify.css";
import loginImage from "../../components/assets/images/login-image.png";
import { CommonService } from "../../servises/CommonService";
import logo from "../../components/assets/images/logo_original.png";
import UserContext from "../context/UserContext";


const Login: React.FC = () => {


    return (
        <div className="login-page">
        </div>
    );
};

export default Login;
