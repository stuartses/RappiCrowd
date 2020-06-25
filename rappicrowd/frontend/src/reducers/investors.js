// create the functions for the investors model
import { GET_INVESTORS, ADD_INVESTOR } from "../actions/types.js";

// Create an empty list for the investors model data
const initialState = {
  investors: []
}

// function to check what keyword to use in investors model
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_INVESTORS:
      return {
        investors: action.payload 
      };		  
    case ADD_INVESTOR:
      return {
        ...state,
        investors: [...state.investors, action.payload]
      };
    default:
      return state;
  }
}
