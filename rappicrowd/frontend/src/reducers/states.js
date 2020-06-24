''' create the functions for the states model '''
import { GET_STATES } from "../actions/types.js";

''' Create an empty list for the states model data'''
const initialState = {
	  states: []
}

'''function to check what keyword to use in states model'''
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_STATES:
      return {
        ...state,
        states: action.payload
      };
    default:
      return state;
  }
}

