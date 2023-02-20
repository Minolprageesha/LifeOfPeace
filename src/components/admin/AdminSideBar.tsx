import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { RouteName } from "../../RouteName";
import "../assets/css/style1.css";
import "../assets/css/core.css";
import "../assets/css/icon-font.css";
import { MenuContext } from "../context/MenuContext";
import UserContext from "../context/UserContext";


const AdminSideMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useContext(MenuContext);
  const [user, setUser] = useContext(UserContext);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/login";
    setTimeout(function () {
        setUser(undefined);
    }, 100);
  };

  return (
    <div className={isMenuOpen ? 'left-side-bar open sideColor' : 'left-side-bar sideColor'}>
      <NavLink to={RouteName.ADMIN_DASHBOARD} > 
        <div className="brand-logo mb-5">
          {/* <img src={logoImage} className="brand-logo-text mt-40 ml-4-5" /> */}
          
          <div className="close-sidebar" onClick={toggleMenu}>
            <i className="ion-close-round"></i>
          </div>
        </div>
      </NavLink>

      <div className="menu-block scrollSideBar mt-5">
        <div className="sidebar-menu mt-5">
          <ul id="accordion-menu" className="mt-5">
            <li>
              <NavLink to={RouteName.ADMIN_DASHBOARD} onClick={toggleMenu} className={location.pathname == RouteName.ADMIN_DASHBOARD ? "dropdown-toggle selected-side no-arrow" : "dropdown-toggle no-arrow"}>
                <span className={location.pathname == RouteName.ADMIN_DASHBOARD ? "micon dw dw-home selected-side" : "micon dw dw-home"} ></span>
                <span className="mtext">Dashboard</span>
              </NavLink>
            </li>

            <li>
              <NavLink to={RouteName.INACTIVE_USERS} onClick={toggleMenu} className={location.pathname == RouteName.INACTIVE_USERS ? "dropdown-toggle selected-side no-arrow" : "dropdown-toggle no-arrow"}>
                <span className={location.pathname == RouteName.INACTIVE_USERS ? "micon dw dw-user1 selected-side" : "micon dw dw-user1"} ></span>
                <span className="mtext">Inactive Users</span>
              </NavLink>
            </li>

            <li>
              <NavLink to={RouteName.ADMIN_SETTINGS} onClick={toggleMenu} className={location.pathname == RouteName.ADMIN_SETTINGS ? "dropdown-toggle selected-side no-arrow" : "dropdown-toggle no-arrow"}>
                <span className={location.pathname == RouteName.ADMIN_SETTINGS ? "micon dw dw-settings selected-side" : "micon dw dw-settings"} ></span>
                <span className="mtext">Settings</span>
              </NavLink>
            </li>
            

          </ul>
          <ul id="logout_sidebar_button" >
            <li>
              <div onClick={logout} className="dropdown-toggle no-arrow cursor-pointer">
                <span className="micon dw dw-logout"></span>
                <span className="mtext">Logout</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminSideMenu;
