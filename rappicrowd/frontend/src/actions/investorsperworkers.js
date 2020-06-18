import axios from "axios";
import { GET_INVESTORSPERWORKERS, ADD_INVESTORPERWORKER } from "./types";
import { getToken } from '../utils/get-token';

const csrftoken = getToken('csrftoken');
const headers = {
  "X-CSRFToken": csrftoken
}

export const getInvestorsPerWorkers = () => dispatch => {
  axios
    .get("/investorsPerWorkersTotalAmountPerWorker")
    .then(res => {
      dispatch({
        type: GET_INVESTORSPERWORKERS,
        payload: res.data      
      });
    })
    .catch(err => console.log(err));	
}

export const addInvestorPerWorker = (investorperworker) => dispatch => {
  axios
    .post("/investorsPerWorkers", investorperworker, {
      headers: headers	
    })    
    .then(res => {
      dispatch({
        type: ADD_INVESTORPERWORKER,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(err.response)
    })
}
