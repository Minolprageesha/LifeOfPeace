import React from "react";
// import loader from "../../assets/images/loader.gif";

const Spinner: React.FC<{
    className?: string;
}> = (props) => {
  return (

    <div className={props.className ? props.className : 'bouncer'}>
      {/* <img src={loader} /> */}
    </div>
  );
};

export default Spinner;