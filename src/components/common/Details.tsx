import React from "react";
import "../../components/assets/css/core.css";
import "../../components/assets/css/style12.css";
import "../../components/assets/css/style1.css";
import "../../components/assets/css/home.css";
import { toast } from "react-toastify";
toast.configure();
import "react-toastify/dist/ReactToastify.css";
import "react-circular-progressbar/dist/styles.css";
import NavBarDashbord from "./NawbarDetails";
import UserSection from "./UserDetails";
import DocterListSection from "./UserCardList";





const DetailsPage: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "200vh" }}>
      <NavBarDashbord/>
      <div style={{ display: "flex", minHeight: "200vh" }}>
        <UserSection/>
        <DocterListSection />
      </div>
    </div>
  );
};

export default DetailsPage;



