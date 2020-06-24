'''import axios to use the request methods'''
import axios from "axios";

'''calls the methods of the cities model according types file'''
import { GET_CITIES } from "./types";

''' call function get request dispatch to call the root with ip'''
export const getCities = () => dispatch => {
  axios
    .get("/cities")
    .then(res => {
      dispatch({
        type: GET_CITIES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
