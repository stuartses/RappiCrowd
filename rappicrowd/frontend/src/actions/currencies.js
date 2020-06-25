// import axios to use the request methods
import axios from "axios";


// calls the methods of the currencies model according types file
import { GET_CURRENCIES } from "./types";


// call function get request dispatch to call the root with ip
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
