/*
 Allow send POST request getting the Cookie by CSRF security
 https://docs.djangoproject.com/en/3.0/ref/csrf/

 Requirements: jquery

 use:
    <script src="path.../getcookie.js"></script>

 and call:

    let csrftoken = getCookie('csrftoken');

* in fetch function (React):

fetch(url, {
    credentials: 'include',
    method: 'POST',
    mode: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRFToken': csrftoken
    },
    body: {}
   })
  }

*/

function getCookie (name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = jQuery.trim(cookies[i]);
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
