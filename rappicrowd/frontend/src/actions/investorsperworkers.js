import axios from "axios";

import { GET_INVESTORSPERWORKERS } from "./types";


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
};
