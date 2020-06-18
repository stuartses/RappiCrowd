import { GET_WORKERS, UPDATE_WORKER } from "../actions/types.js";

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
    case UPDATE_WORKER:
      return {
        ...state,
	workers: action.payload
      };
      default:
        return state;
  }
}
