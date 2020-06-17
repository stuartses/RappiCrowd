import { GET_INVESTORSPERWORKERS } from "../actions/types.js";

const initialState = {
  investorsperworkers: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_INVESTORSPERWORKERS:
      return {
        investorsperworkers: action.payload 
      };		  
    default:
      return state;
  }
}
