import axios from "axios";

import { GET_CURRENCIES } from "./types";

export const getCurrencies = () => dispatch => {
  axios
    .get("/currencies")
    .then(res => {
      dispatch({
        type: GET_CURRENCIES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

