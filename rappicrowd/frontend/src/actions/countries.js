'''import axios to use the request methods'''
import axios from "axios";

'''calls the methods of the countries model according types file'''
import { GET_COUNTRIES } from "./types";


''' call function get request dispatch to call the root with ip'''
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

