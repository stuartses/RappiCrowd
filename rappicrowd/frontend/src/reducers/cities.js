''' create the functions for the cities model '''
import { GET_CITIES } from "../actions/types.js";


''' Create an empty list for the cities model data'''
const initialState = {
  cities: []
}


export default function(state = initialState, action) {
  '''function to check what keyword to use in cities model'''	
  switch (action.type) {
    case GET_CITIES:
      return {
        ...state,
        cities: action.payload
      };
    default:
      return state;
  }
}
