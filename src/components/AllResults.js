import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const AllResults = (props) => {
  console.log("these are the AllResults props", props);
  console.log(
    "these are the AllResults props getting deeper"
    // props.tv_show_results[0].show.id
  );

  const { push } = useHistory();

  const handleClick = () => {
    push("/topfive");
  };
  // const image = props.tv_show_results.show.image.medium ===
  return (
    <div>
      this is the all results component<br></br>
      {props.tv_show_results.map((item) => {
        return (
          <div key={item.show.id}>
            <div onClick={handleClick} className="name">
              {item.show.name}
            </div>
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
