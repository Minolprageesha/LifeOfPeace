import React, { useContext } from "react";
import { MenuContext } from "../context/MenuContext";
import "../assets/css/style1.css";
import "../assets/css/core.css";
import "../assets/css/icon-font.css";

const NavBarDashbord: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useContext(MenuContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <div className="header">
      <div className="header-left">
        <div className="menu-icon ti ti-menu-alt" onClick={toggleMenu}></div>
      </div>
    </div>
  );
};

export default NavBarDashbord;
