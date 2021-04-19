import React from "react";
import { connect } from "react-redux";

const SingleShow = (props) => {
  console.log("this is the single show result", props);
  console.log(
    "these are the AllResults props getting deeper"
    // props.tv_show_results[0].show.id
  );
  return (
    <div>
      This is the single show component <br></br>
      {/* {props.tv_show_results.map((item) => {
        return (
          <div key={item.show.id}>
            <div className="name">{item.show.name}</div>
            <br></br>
            <img
              src={item.show.image === null ? null : item.show.image.medium}
            />
            <br></br>
            {item.show.summary
              .replace(`<p>`, "")
              .replace(`<b>`, "")
              .replace(`</p>`, "")
              .replace(`</b>`, "")}
          </div>
        );
      })} */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tv_show_results: state.SEARCHREDUCER.tv_show_results,
  };
};

export default connect(mapStateToProps, {})(SingleShow);
