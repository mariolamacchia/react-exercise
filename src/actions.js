import fetch from 'isomorphic-fetch'

export const REQUEST_CATS = 'REQUEST_CATS';
export const RECEIVE_CATS = 'RECEIVE_CATS';
export const FAIL_CATS_REQUEST = 'FAIL_CATS_REQUEST';

function requestCats() {
  return {
    type: REQUEST_CATS
  };
}

function receiveCats(cats) {
  return {
    type: RECEIVE_CATS,
    cats
  };
}

function failCatsRequest(error) {
  return {
    type: FAIL_CATS_REQUEST,
    error
  };
}

export function fetchCats() {
  return function(dispatch) {
    dispatch(requestCats());

    fetch('/data.json')
      .then(
        response => {
          if (response.status >= 400) {
            return Promise.reject(response.statusText);
          } else {
            return response.json();
          }
        }
      )
      .then(
        json => dispatch(receiveCats(json.races)),
        error => dispatch(failCatsRequest(error))
      )
  }
}
