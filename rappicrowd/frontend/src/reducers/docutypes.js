''' create the functions for the docutypes model '''
import { GET_DOCUTYPES } from "../actions/types.js";


''' Create an empty list for the docutypes model data'''
const initialState = {
	docutypes: []
}

'''function to check what keyword to use in docutypes model'''
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DOCUTYPES:
      return {
        ...state,
	docutypes: action.payload
      };
      default:
        return state;
  }
}
