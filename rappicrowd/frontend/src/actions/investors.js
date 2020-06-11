import axios from "axios";

import { GET_INVESTORS, ADD_INVESTOR } from "./types";


export const getInvestors = () => dispatch => {
  axios
    .get("/investors")
    .then(res => {
      dispatch({
        type: GET_INVESTORS,
	payload: res.data      
      });
    })
    .catch(err => console.log(err));	
};


export const addInvestor = (investor) => dispatch => {  	
  axios
    .post("/investors", investor)
    .then(res => {
      dispatch({
        type: ADD_INVESTOR,
	payload: res.data      
      });
    })
    .catch(err => {
       console.log(err.response)
    });
};
