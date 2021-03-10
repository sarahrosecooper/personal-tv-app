import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getTvShowResults } from "../actions/searchbarActions";

// guideline1 : https://medium.com/@carlie.anglemire/search-bar-in-react-with-a-3rd-party-api-ced92c940236
// guideline 2: https://www.freecodecamp.org/news/how-to-build-a-movie-search-app-using-react-hooks-24eb72ddfaf7/

const Searchbar = (props) => {
  const [search, setSearch] = useState({
    searchTerm: "",
  });

  // console.log(search);

  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const submitSearch = (e) => {
    e.preventDefault();
    setSearch({
      searchTerm: "",
    });
    props.getTvShowResults(search.searchTerm);
  };

  // useEffect(() => {
  //   props.getTvShowResults(search);
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get("http://api.tvmaze.com/search/shows?q=girls")
  //     .then((res) => {
  //       console.log(
  //         "SRC: SUCCESS: SearchBar.js, UseEffect Axios positive response",
  //         res.data[0].show.name
  //       );
  //       setSearch({
  //         searchTerm: res.data[0].show.name,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(
  //         ("SRC: ERROR: SearchBar.js, UseEffect Axios response", err)
  //       );
  //     });
  // }, []);

  return (
    <div>
      this is the searchbar component
      <form onSubmit={submitSearch}>
        <label htmlFor="searchTerm" />
        <input
          id="searchTerm"
          type="text"
          name="searchTerm"
          value={search.searchTerm}
          onChange={handleChange}
          placeholder="search here"
        />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    is_searching: state.SEARCHREDUCER.is_searching,
    search_success: state.SEARCHREDUCER.search_success,
    search_error: state.SEARCHREDUCER.search_error,
    tv_show_results: state.SEARCHREDUCER.tv_show_results,
  };
};

export default connect(mapStateToProps, { getTvShowResults })(Searchbar);
