/*
Make s request to Personality API
url: personins/load
*/
import { getToken } from './get-token';

function fetchScore (userName, profile, mode) {
  const djangotoken = getToken('csrftoken');
  let formData = new FormData();
  formData.append('user_name', userName);
  formData.append('profile', profile);
  formData.append('mode', mode);
  const urlPersoins = '/personins/load/';
  let answer = {};

  return fetch(urlPersoins, {
    credentials: 'include',
    method: 'POST',
    mode: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'X-CSRFToken': djangotoken
    },
    body: formData
  }).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      console.log('Fetch error');
    }
  }).then((json) => {
    return json;
  }).catch(error => {
    console.log('Conection error');
  });
}

export { fetchScore };
