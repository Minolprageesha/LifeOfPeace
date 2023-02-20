import React, { useContext } from "react";
import { MenuContext } from "../context/MenuContext";
import {NavLink } from "react-router-dom";
import UserContext from "../context/UserContext";
import "../assets/css/style1.css";
import "../assets/css/core.css";
import "../assets/css/icon-font.css";
import logoImage from "../../components/assets/images/logo_original.png";
import { RouteName } from "../../RouteName";

const NavBarMain: React.FC = () => {
    const [user, setUser] = useContext(UserContext);
    const [isMenuOpen, setIsMenuOpen] = useContext(MenuContext);

    const logout = () => {
        localStorage.clear();
        sessionStorage.clear();
        window.location.href = "/login";
        setTimeout(function () {
            setUser(undefined);
        }, 100);
    };


    return (
        <div className="header001">
            <div className="header-left">
                <NavLink to={RouteName.ROOT}><img src={logoImage} className="brand-logo-text ml-5 mb-1" /></NavLink>
            </div>
            
            <div className="header001-right">
                <div className="user-info-dropdown">
                    <div className="cursor-pointer main-container003" onClick={logout}>
                        <i className="dw dw-logout"></i> Log Out
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBarMain;
