import { GET_DOCUTYPES } from "../actions/types.js";

const initialState = {
	docutypes: []
}

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
