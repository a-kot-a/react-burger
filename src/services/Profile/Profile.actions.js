export const PROFILE_FETCH_REQUEST = 'PROFILE_FETCH_REQUEST';
export const PROFILE_FETCH_SUCCESS = 'PROFILE_FETCH_SUCCESS';
export const PROFILE_FETCH_ERROR = 'PROFILE_FETCH_ERROR';
export const PROFILE_AUTH_CHECKED = 'PROFILE_AUTH_CHECKED';

export const profileFetchRequest = () => ({
  type: PROFILE_FETCH_REQUEST,
});

export const profileFetchSuccess = result => ({
  type: PROFILE_FETCH_SUCCESS,
  ...result,
});

export const profileFetchError = errors => ({
  type: PROFILE_FETCH_ERROR,
  errors,
});

export const profileAuthChecked = value => ({
  type: PROFILE_AUTH_CHECKED,
  payload: value,
});
