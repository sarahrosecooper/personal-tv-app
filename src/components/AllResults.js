import React, { useState } from "react";
import { connect } from "react-redux";
import SingleShow from "./SingleShow.js";

// All results from initial search from searchbar

const AllResults = (props) => {
  const [selectedTitle, setSelectedTitle] = useState();
  const [displayShow, setDisplayShow] = useState(false);

  const handleClick = (item) => {
    setSelectedTitle(item.show);
    displayTheShow();
  };

  const displayTheShow = () => {
    setDisplayShow(!displayShow);
  };

  return (
    <div>
      {displayShow ? (
        <SingleShow show={selectedTitle} />
      ) : (
        props.tv_show_results.map((item) => {
          return (
            <div key={item.show.id}>
              <div
                onClick={() => {
                  handleClick(item);
                }}
              >
                {item.show.name}

                <br></br>
                <img
                  alt={item.show.name}
                  src={item.show.image === null ? null : item.show.image.medium}
                />
              </div>
              <br></br>
              {item.show.summary
                .replace(`<p>`, "")
                .replace(`<b>`, "")
                .replace(`</p>`, "")
                .replace(`</b>`, "")}
            </div>
          );
        })
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tv_show_results: state.SEARCHREDUCER.tv_show_results,
  };
};

export default connect(mapStateToProps, {})(AllResults);
