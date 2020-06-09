import { GET_WORKERS } from "../actions/types.js";

const initialState = {
	workers: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_WORKERS:
      return {
        ...state,
	workers: action.payload
      };
      default:
        return state;
  }
}
