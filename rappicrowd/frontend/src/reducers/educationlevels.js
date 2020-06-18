import { GET_EDUCATIONLEVELS } from "../actions/types.js";

const initialState = {
	educationlevels: []
}

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
