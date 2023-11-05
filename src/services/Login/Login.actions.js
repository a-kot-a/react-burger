export const LOGIN_FETCH_REQUEST = 'LOGIN_FETCH_REQUEST';
export const LOGIN_FETCH_SUCCESS = 'LOGIN_FETCH_SUCCESS';
export const LOGIN_FETCH_ERROR = 'LOGIN_FETCH_ERROR';

export const loginFetchRequest = () => ({
  type: LOGIN_FETCH_REQUEST,
});

export const loginFetchSuccess = result => ({
  type: LOGIN_FETCH_SUCCESS,
  ...result,
});

export const loginFetchError = errors => ({
  type: LOGIN_FETCH_ERROR,
  errors,
});
