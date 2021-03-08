import React, { useState } from "react";

// guideline: https://medium.com/@carlie.anglemire/search-bar-in-react-with-a-3rd-party-api-ced92c940236

const Searchbar = () => {
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
  };

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

export default Searchbar;
