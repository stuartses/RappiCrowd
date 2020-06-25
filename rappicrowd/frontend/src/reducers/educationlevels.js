// create the functions for the educationLevels model
import { GET_EDUCATIONLEVELS } from "../actions/types.js";


// Create an empty list for the educationLevels model data
const initialState = {
	educationlevels: []
}

// function to check what keyword to use in educationLevels model
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_EDUCATIONLEVELS:
      return {
        ...state,
	educationlevels: action.payload
      };
      default:
        return state;
  }
}
