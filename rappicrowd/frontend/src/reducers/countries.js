''' create the functions for the model countries ''' 
import { GET_COUNTRIES } from "../actions/types.js";


''' Create an empty list for the countries model data'''
const initialState = {
	countries: []
}


export default function(state = initialState, action) {
    '''function to check what keyword to use in countries model'''   	

    switch (action.type) {
        case GET_COUNTRIES:
	    return {
	        ...state, 
		countries: action.payload
	    };
	default:
	    return state;
    }
}
