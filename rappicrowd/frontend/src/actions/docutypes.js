'''import axios to use the request methods'''
import axios from "axios";


'''calls the methods of the docutypes model according types file'''
import { GET_DOCUTYPES } from "./types";


''' call function get request dispatch to call the root with ip'''
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

