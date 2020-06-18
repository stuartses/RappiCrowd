import axios from "axios";

import { GET_DOCUTYPES } from "./types";

export const getDocutypes = () => dispatch => {
  axios
    .get("/docutypes")
    .then(res => {
      dispatch({
        type: GET_DOCUTYPES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

