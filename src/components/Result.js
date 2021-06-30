import React from "react";

const Result = (props) => {
  // console.log("this is props", props)
  return (
    <div>
      <h1>{props.result.show.name} </h1>
      <img src={props.result.show.image} />
    </div>
  );
};

export default Result;
