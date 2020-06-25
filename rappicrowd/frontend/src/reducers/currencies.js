// create the functions for the currencies model
import { GET_CURRENCIES } from "../actions/types.js";


// Create an empty list for the currencies model data
const initialState = {
	currencies: []
}

export default function(state = initialState, action) {
  // function to check what keyword to use in currencies model
  switch (action.type) {
    case GET_CURRENCIES:
      return {
        ...state,
	currencies: action.payload
      };
      default:
        return state;
  }
}
