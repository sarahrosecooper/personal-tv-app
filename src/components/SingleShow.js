import React from "react";

// Singleshow result from searchbar

const SingleShow = ({ show }) => {
  // FIXME why doesn't the searchBar work when only a single result is showing, is it the state in the reducer?
  console.log("this is the single show result", show);

  return (
    <div>
      {show.name}
      <br></br>
      <img src={show.image === null ? null : show.image.medium} />
      <br></br>
      {show.summary
        .replace(`<p>`, "")
        .replace(`<b>`, "")
        .replace(`</p>`, "")
        .replace(`</b>`, "")}
    </div>
  );
};

export default SingleShow;
