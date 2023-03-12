import React, { useEffect, useState } from "react";


const UserSection: React.FC = () => {
    return (
      <div style={{ flex: 0.27, borderRight: "1px solid black", padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center", marginTop:"5rem"}}>
        <div style={{ width: "15rem", height: "15rem", borderRadius: "50%", border: "2px solid black" }}> </div>
        <h1> Minol Prageesha </h1>
      </div>
    );
  };

  export default UserSection;