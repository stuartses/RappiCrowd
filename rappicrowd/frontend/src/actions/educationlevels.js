import axios from "axios";

import { GET_EDUCATIONLEVELS } from "./types";

export const getEducationLevels = () => dispatch => {
  axios
    .get("/educationLevels")
    .then(res => {
      dispatch({
        type: GET_EDUCATIONLEVELS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

