'''import axios to use the request methods'''
import axios from "axios";

'''calls the methods of the states model according types file'''
import { GET_STATES } from "./types";

''' call function get request dispatch to call the root with ip'''
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
