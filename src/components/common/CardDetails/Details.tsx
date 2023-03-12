
import { UserCard } from "../../../models/Card";
import classes from "./Details.module.css";
import React from "react";
type Props = {
  Doctor: UserCard;
};

const Details: React.FC<Props> = (props) => {
  const { Doctor } = props;
  return (
    <div className={classes.main}>
      <img
        src={`https://image.tmdb.org/t/p/w500${Doctor.backdrop_path}`}
        width="100%"
        height={500}
      />
      <h1 className={classes.h2}> {Doctor.title ? Doctor.title : Doctor.name} </h1>
      <h3> {Doctor.release_date} </h3>
      <h3 className={classes.overview}> {Doctor.overview} </h3>
      <h4 className={classes.vote}> {Doctor.vote_average} </h4>
    </div>
  );
};

export default Details;
