import React from "react";
import "../../components/assets/css/core.css";
import "../../components/assets/css/style12.css";
import "../../components/assets/css/style1.css";
import "../../components/assets/css/home.css";
import { toast } from "react-toastify";
toast.configure();
import "react-toastify/dist/ReactToastify.css";
import "react-circular-progressbar/dist/styles.css";

const DetailsPage: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <MainHeader />

      <div style={{ display: "flex", minHeight: "100vh" }}>
        <UserSection />
        <DataSection />
      </div>
    </div>
  );
};

export default DetailsPage;

const MainHeader: React.FC = () => {
  return (
    <div style={{ height: "7rem", borderBottom: "2px solid black", padding: "1rem", display: "flex", alignItems: "center", gap: "1rem" }}>
      <h1 style={{ flex: 1 }}>Title</h1>

      <h3> Tab 1 </h3>
      <h3> Tab 2 </h3>

      <div style={{ width: "5rem" }}></div>

      <div style={{ width: "5rem", height: "5rem", borderRadius: "50%", border: "2px solid black" }}> </div>
    </div>
  );
};

const UserSection: React.FC = () => {
  return (
    <div style={{ flex: 0.27, borderRight: "1px solid black", padding: "2rem", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "15rem", height: "15rem", borderRadius: "50%", border: "2px solid black" }}> </div>
    </div>
  );
};

const items = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

const DataSection: React.FC = () => {
  return (
    <div style={{ flex: 0.73, marginTop: "2rem", display: "flex", justifyContent: 'flex-start', gap: "1rem", flexWrap: "wrap", padding : '1rem' }}>
      {items.map((item, index) => (
        <div key={index} style={{ padding: "1rem", border: "1px solid black", height: "150px", width: "150px" }}>
          {" "}
          {item}{" "}
        </div>
      ))}
    </div>
  );
};
