// import axios to use the request methods
import axios from "axios";
import { GET_INVESTORS, ADD_INVESTOR } from "./types";
import { getToken } from '../utils/get-token';


const csrftoken = getToken('csrftoken');
const headers = {
  "X-CSRFToken": csrftoken
}

// call function get request dispatch to call the root with ip
export const getInvestors = () => dispatch => {
  axios
    .get("/investors")
    .then(res => {
      dispatch({
        type: GET_INVESTORS,
        payload: res.data
      })
    })
    .catch(err => console.log(err))
}

// call function post request dispatch to call the root with ip
export const addInvestor = (investor) => dispatch => {
  axios
    .post("/investors", investor, {
      headers: headers
    })
    .then(res => {
      dispatch({
        type: ADD_INVESTOR,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(err.response)
    })
}
