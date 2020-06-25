// import axios to use the request methods
import axios from "axios";

// calls the methods of the educationLevels model according types file
import { GET_EDUCATIONLEVELS } from "./types";

// call function get request dispatch to call the root with ip
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
