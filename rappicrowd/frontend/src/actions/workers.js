import axios from "axios";
import { GET_WORKERS, ADD_WORKER, UPDATE_WORKER } from "./types";
import { getToken } from '../utils/get-token';


const csrftoken = getToken('csrftoken');
const headers = {
  "X-CSRFToken": csrftoken
}

export const getWorkers = () => dispatch => {
  axios
    .get("/workers")
    .then(res => {
      dispatch({
        type: GET_WORKERS,
        payload: res.data
      })
    })
    .catch(err => console.log(err))
}

export const addWorker = (worker) => dispatch => {
  axios
    .post("/workers", worker, {
      headers: headers
    })
    .then(res => {
      dispatch({
        type: ADD_WORKER,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(err.response)
    })
}


export const updateWorker = (worker) => dispatch => {
  axios
    .patch(`/workers/update/${worker.workerCed}/`, worker, {
      headers: headers
    })
    .then(res => {
      dispatch({
        type: UPDATE_WORKER,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(err.response)
    })
}
