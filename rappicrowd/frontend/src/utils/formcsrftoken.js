import React from 'react';
import { getToken } from './get-token';

let csrftoken = getToken('csrftoken');
const CSRFToken = () => {
    return (
        <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
    );
};

export default CSRFToken;
