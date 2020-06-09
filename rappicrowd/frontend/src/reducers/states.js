import { GET_STATES } from "../actions/types.js";

const initialState = {
	  states: []
}

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

