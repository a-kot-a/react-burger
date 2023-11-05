export const REGISTRATION_FETCH_REQUEST = 'REGISTRATION_FETCH_REQUEST';
export const REGISTRATION_FETCH_SUCCESS = 'REGISTRATION_FETCH_SUCCESS';
export const REGISTRATION_FETCH_ERROR = 'REGISTRATION_FETCH_ERROR';

export const registrationFetchRequest = () => ({
  type: REGISTRATION_FETCH_REQUEST,
});

export const registrationFetchSuccess = result => ({
  type: REGISTRATION_FETCH_SUCCESS,
  ...result,
});

export const registrationFetchError = errors => ({
  type: REGISTRATION_FETCH_ERROR,
  errors,
});
