import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import SingleShow from "./SingleShow.js";

const AllResults = (props) => {
  const [selectedTitle, setSelectedTitle] = useState();
  const [displayShow, setDisplayShow] = useState(false);

  console.log("these are the AllResults props", props);
  console.log(
    "these are the AllResults props getting deeper"
    // props.tv_show_results[0].show.id
  );

  const { push } = useHistory();
  const { id } = useParams();

  const handleClick = (item) => {
    console.log("this is the item in AllResults", item.show);
    // push(`/singleshow/${item.show.id}`);
    setSelectedTitle(item.show);
    displayTheShow();
    console.log("this is the selected title", selectedTitle);
  };

  const displayTheShow = () => {
    setDisplayShow(!displayShow);
    console.log(displayShow);
  };

  // const image = props.tv_show_results.show.image.medium ===
  return (
    <div>
      {displayShow ? (
        <SingleShow show={selectedTitle} />
      ) : (
        props.tv_show_results.map((item) => {
          return (
            <div key={item.show.id}>
              {/* <div onClick={handleClick} className="name"> */}
              <div
                onClick={() => {
                  handleClick(item);
                }}
              >
                {item.show.name}

                <br></br>
                <img
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

      {/* {props.tv_show_results.map((item) => {
        return (
          <div key={item.show.id}> */}
      {/* <div onClick={handleClick} className="name"> */}
      {/* <div
              onClick={() => {
                handleClick(item);
              }}
            >
              {item.show.name}

              <br></br>
              <img
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
      })} */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tv_show_results: state.SEARCHREDUCER.tv_show_results,
  };
};

export default connect(mapStateToProps, {})(AllResults);
