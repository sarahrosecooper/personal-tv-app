import React from "react";
import { connect } from "react-redux";

const AllResults = (props) => {
  console.log("these are the AllResults props", props);
  console.log(
    "these are the AllResults props getting deeper",
    props.tv_show_results[0].show.id
  );

  return (
    <div>
      this is the all results component<br></br>
      {props.tv_show_results.map((item) => {
        return <div>{item.show.name}</div>;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tv_show_results: state.SEARCHREDUCER.tv_show_results,
  };
};

export default connect(mapStateToProps, {})(AllResults);
