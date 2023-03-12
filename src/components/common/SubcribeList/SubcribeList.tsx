import React from "react";
import { UserCard } from "../../../models/Card";
import Card from "../Usercard/Card";
import classes from "./SubcribeList.module.css";

type Props = {
  doctors: UserCard[];
  selectedDocterHandler: any;
};

const SubcribedUsers: React.FC<Props> = (props) => {
  const { doctors, selectedDocterHandler } = props;

  return (
    <div className={classes.main}>
      <h1>Subcribed docters</h1>
      <div className={classes.docters}>
        {doctors.length > 0 &&
          doctors.map((doctor, index) => (
            <div key={index} onClick={() => selectedDocterHandler(index)}>
              <Card
                title={doctor.title ? doctor.title : doctor.name}
                imageUrl={doctor.backdrop_path}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default SubcribedUsers;
