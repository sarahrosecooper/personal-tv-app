import axios from "axios";
export const SEARCH_RESULTS_LOADING = "SEARCH_RESULTS_LOADING";
export const FOUND_SEARCH_RESULTS = "FOUND_SEARCH_RESULTS";
export const ERROR_RETRIEVING_SEARCH_RESULTS =
  "ERROR_RETRIEVING_SEARCH_RESULTS";

// NOTE i don't even remember wtf is going on with "query"... ? seems necessary LOL

export const getTvShowResults = (query) => (dispatch) => {
  dispatch({ type: SEARCH_RESULTS_LOADING });
  axios
    .get(`http://api.tvmaze.com/search/shows?q=:${query}`)
    .then((response) => {
      dispatch({
        type: FOUND_SEARCH_RESULTS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: ERROR_RETRIEVING_SEARCH_RESULTS,
        payload: { error },
      });
    });
};
