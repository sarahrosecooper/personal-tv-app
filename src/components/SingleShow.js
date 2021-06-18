import React from "react";
import styled from "styled-components";

// Singleshow result from searchbar

const SingleShowDiv = styled.div`
  display: flex;
`;
const SingleShow = ({ show }) => {
  // FIXME why doesn't the searchBar work when only a single result is showing, is it the state in the reducer?
  console.log("this is the single show result", show);

  return (
    <SingleShowDiv>
      <div>
        {show.name}
        <br></br>
        {/* Something weird is going on with some broken images. Try the searchbar for "Fun"*/}
        <img
          alt={show.name}
          src={show.image === null ? null : show.image.medium}
        />{" "}
        {/* // NOTE some shows don't have images, when that happens there is an
        error, so this is necessary */}
        <br></br>
        {/* // NOTE how the date comes back, it is necessary to take away html tags.
        Is there a better way to do this? */}
        {show.summary
          .replace(`<p>`, "")
          .replace(`<b>`, "")
          .replace(`</p>`, "")
          .replace(`</b>`, "")}
      </div>
      <div>
        <ul>
          <li>♡ favorite</li>
          <li>✔ completed</li>
          <li>👎 disliked</li>
          <li>♡ currently watching</li>
          <li>♡ want to watch</li>
        </ul>
      </div>
    </SingleShowDiv>
  );
};

export default SingleShow;
