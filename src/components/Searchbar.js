import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getTvShowResults } from "../actions/searchbarActions";
import { useHistory, useParams, Link } from "react-router-dom";

// Search component to search for all tv shows to log

// guideline1 : https://medium.com/@carlie.anglemire/search-bar-in-react-with-a-3rd-party-api-ced92c940236
// guideline 2: https://www.freecodecamp.org/news/how-to-build-a-movie-search-app-using-react-hooks-24eb72ddfaf7/

const Searchbar = (props) => {
  const [search, setSearch] = useState({
    searchTerm: "",
  });

  const { id } = useParams();
  const { push } = useHistory();

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
    push("/allresults");
  };

  return (
    <div className="searchbar">
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
        <button>search</button>
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
