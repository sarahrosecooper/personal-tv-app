import {
  SEARCH_RESULTS_LOADING,
  FOUND_SEARCH_RESULTS,
  ERROR_RETRIEVING_SEARCH_RESULTS,
} from "../actions/searchbarActions";

const initialState = {
  is_searching: false,
  search_success: false,
  search_error: "",
  tv_show_results: [],
};

export const searchBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_RESULTS_LOADING:
      return {
        ...state,
        is_searching: true,
      };
    case FOUND_SEARCH_RESULTS:
      return {
        ...state,
        is_searching: false,
        search_success: true,
        tv_show_results: action.payload,
      };
    case ERROR_RETRIEVING_SEARCH_RESULTS:
      return {
        ...state,
        is_searching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
