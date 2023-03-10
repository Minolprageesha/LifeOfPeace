import React, { useContext } from "react";
import "../App.css";
import { Redirect } from "react-router-dom";
import UserContext from "../context/UserContext";
import { RouteName } from "../../RouteName";
import { Role } from "../../models/Role";


const VerifyRole: React.FC<{ allow?: Role; children: any }> = ({ allow, children }): any => {
  const [user] = useContext(UserContext);
  const role = user && user.role;
  if (!role) {
    return <div></div>;
  } else if (user.verifiedStatus == "PENDING") {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/login";
  } else if (allow && role === allow) {
    return <>{children}</>;
  } else {
    switch (role) {
      case Role.SUPER_ADMIN:
        return <Redirect to={RouteName.ADMIN_DASHBOARD} />;
      case Role.CUSTOMER_ADMIN:
        return <Redirect to={RouteName.CUSTOMER_ADMIN_DASHBOARD} />;
    }
  }
}
export default VerifyRole;
