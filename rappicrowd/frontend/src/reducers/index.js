import { combineReducers } from 'redux';
import countries from './countries';
import docutypes from './docutypes';
import states from './states';
import cities from './cities';
import investors from './investors';
import educationlevels from './educationlevels';
import currencies from './currencies';
import workers from './workers';
import investorsperworkers from './investorsperworkers';


export default combineReducers({
    countries,
    docutypes,
    states,
    cities,
    investors,
    educationlevels,
    currencies,
    workers,
    investorsperworkers	
});
