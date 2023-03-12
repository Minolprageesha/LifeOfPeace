import classes from "./Card.module.css";
import React, { useState } from "react";

type Props = {
  imageUrl: string;
  title?: string;
};
const Card: React.FC<Props> = (props) => {
  const { imageUrl, title } = props;
  return (
    <div className={classes.card}>
      <img src={`https://image.tmdb.org/t/p/w500${imageUrl}`} />
      {title && <p> {title} </p>}
    </div>
  );
};

export default Card;
