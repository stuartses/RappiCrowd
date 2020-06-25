// create the functions for the investorsPerWorkerscountries model
import { GET_INVESTORSPERWORKERS, ADD_INVESTORPERWORKER } from "../actions/types.js";

// Create an empty list for the investorsPerWorkers model data
const initialState = {
  investorsperworkers: []
}

// function to check what keyword to use in investorsPerWorkers model
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
