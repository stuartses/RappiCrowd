import axios from "axios";

import { GET_COUNTRIES } from "./types";

export const getCountries = () => dispatch => {
  axios
    .get("/countries")
    .then(res => {
      dispatch({
        type: GET_COUNTRIES,
	payload: res.data
      });
    })
    .catch(err => console.log(err));
};

