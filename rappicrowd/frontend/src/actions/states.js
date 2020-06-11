import axios from "axios";

import { GET_STATES } from "./types";

export const getStates = () => dispatch => {
  axios
   .get("/states")
   .then(res => {
     dispatch({
       type: GET_STATES,
       payload: res.data
     });
   })
   .catch(err => console.log(err));
};
