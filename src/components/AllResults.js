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

  // {/* NOTE this is simply toggling if you have clicked on the show, it will show. toggling the visibility of the single show ON/OFF*/}
  const displayTheShow = () => {
    setDisplayShow(!displayShow);
  };

  return (
    // {/* NOTE is the displayShow toggled on? Display only the selected single
    // show, otherwise OFF display all results */}
    <div className="allResults">
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
                {/* NOTE some show's don't have images, if there is no image this is necessary or an error will render */}
              </div>
              {/* NOTE the way the API works, each description has html tags,
              this is the only way I could come up with to remove them. Better
              way to fix?? */}
              {item.show.summary == null
                ? null
                : "no summary found"
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
