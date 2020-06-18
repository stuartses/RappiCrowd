import { GET_INVESTORS, ADD_INVESTOR } from "../actions/types.js";

const initialState = {
  investors: []
}

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
