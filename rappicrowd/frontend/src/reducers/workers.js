// create the functions for the workers model
import { GET_WORKERS, UPDATE_WORKER } from "../actions/types.js";

// Create an empty list for the workers model data
const initialState = {
	workers: []
}

// function to check what keyword to use in workers model
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_WORKERS:
      return {
        ...state,
	workers: action.payload
      };
    case UPDATE_WORKER:
      return {
        ...state,
	workers: action.payload
      };
      default:
        return state;
  }
}
