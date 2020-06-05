import { combineReducers } from 'redux';
import countries from './countries';
import docutypes from './docutypes';
import states from './states';
import cities from './cities';

export default combineReducers({
    countries,
    docutypes,
    states,
    cities	
});
