
import React, { useEffect, useState } from "react";
import { UserCard,Options } from "../../models/Card";

import "../assets/css/home.css";
import "../assets/css/core.css";
import "../assets/css/bootstrap.min.css";
import { UserCardService } from "../../servises/userCardService";
import SubcribedUsers from "./SubcribeList/SubcribeList";
import AllDoctors from "./AllList/AllDoctors";
import Details from "./CardDetails/Details";


const DocterListSection: React.FC = () => {
    const [option, setOption] = useState<Options>(Options.subcribe);
    const [isDetailPage, setIsDetailPage] = useState<boolean>(false);
    const [selectedDoctor, setSelectedDoctor] = useState<UserCard | undefined>(
      undefined
    );
    const [all, setAll] = useState(true);
    const [subcribedDoctors, setSubcribedDoctors] = useState<UserCard[]>([]);
    const [allDoctors, setAllDoctors] = useState<UserCard[]>([]);
  
    useEffect(() => {
      getSubcribedDoctorsHandler();
      getAllUsersHandler();
      setIsDetailPage(false);
    }, []);
  
    useEffect(() => {
      setIsDetailPage(false);
    }, [option]);
  
    const getSubcribedDoctorsHandler = async () => {
      const { success, data } = await UserCardService.getsubcribed();
      if (success && data?.results) {
        const { results } = data;
        setSubcribedDoctors(() => [...results]);
      }
    };
  
    const getAllUsersHandler = async () => {
      const { success, data } = await UserCardService.getAllDocers();
      if (success && data?.results) {
        const { results } = data;
        setAllDoctors(() => [...results]);
      }
    };
  
    const selectedDoctorHandler = (index: number) => {
      setIsDetailPage(true);
      const doctors = [...subcribedDoctors];
      const doctor = doctors[index];
      setSelectedDoctor(doctor);
    };
  
 

  return (
    <div style={{ flex: 0.73, marginTop: "2rem", display: "flex", justifyContent: "flex-start", gap: "1rem", flexDirection: "column", padding: "1rem" }}>
      <TabBar setAll={setAll} all={all} setOption={setOption} setIsDetailPage={setIsDetailPage} setSelectedDoctor={setSelectedDoctor}  />

      <div style={{ marginTop: "2rem", display: "flex", justifyContent: "flex-start", gap: "1rem", flexWrap: "wrap", padding: "1rem" }}>
              {/* Trending Movies */}
      {!isDetailPage && option === Options.subcribe && (
        <SubcribedUsers
        selectedDocterHandler={selectedDoctorHandler}
          doctors={subcribedDoctors}
        />
      )}

      {/* Upcoming Movies */}
      {!isDetailPage && option === Options.unsubcribe && (
        <AllDoctors  
        selectedDocterHandler={selectedDoctorHandler}
        doctors={allDoctors} />
      )}

      {/* Movie Details */}
      {isDetailPage && selectedDoctor && <Details Doctor={selectedDoctor} />}
      </div>
    </div>
  );
};


export default DocterListSection;

const TabBar = (props) => {
  const { setAll, all,setOption,setIsDetailPage,setSelectedDoctor } = props;

  return (
    <div className="navbar-other flex ms-lg-4 aliganItem"  style={{ marginTop:"5rem"}}>
      <h1 className= { all? "btn-main":"btn-sub" } onClick={() => {setAll(true);setOption(Options.unsubcribe);setIsDetailPage(false);setSelectedDoctor(undefined)}}>
        All Docters
      </h1>
      <h1 className= { !all? "btn-main":"btn-sub" } onClick={() => {setAll(false);setOption(Options.subcribe);setIsDetailPage(false);setSelectedDoctor(undefined)}}>
        {" "}
        Subcribed Doctors{" "}
      </h1>
    </div>
  );
};