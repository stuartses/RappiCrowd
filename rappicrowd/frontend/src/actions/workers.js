import axios from "axios";

import { GET_WORKERS, ADD_WORKER } from "./types";


export const getWorkers = () => dispatch => {
  axios
    .get("/workers")
    .then(res => {
      dispatch({
        type: GET_WORKERS,
	payload: res.data      
      });
    })
    .catch(err => console.log(err));	
};


export const addWorker = (worker) => dispatch => {  	
  axios
    .post("/workers", worker)
    .then(res => {
      dispatch({
        type: ADD_WORKER,
	payload: res.data      
      });
    })
    .catch(err => {
       console.log(err.response)
    });
};
