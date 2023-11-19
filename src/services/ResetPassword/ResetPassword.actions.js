export const RESET_PASSWORD_FETCH_REQUEST = 'RESET_PASSWORD_FETCH_REQUEST';
export const RESET_PASSWORD_FETCH_SUCCESS = 'RESET_PASSWORD_FETCH_SUCCESS';
export const RESET_PASSWORD_FETCH_ERROR = 'RESET_PASSWORD_FETCH_ERROR';

export const resetPasswordFetchRequest = () => ({
  type: RESET_PASSWORD_FETCH_REQUEST,
});

export const resetPasswordFetchSuccess = result => ({
  type: RESET_PASSWORD_FETCH_SUCCESS,
  ...result,
});

export const resetPasswordFetchError = errors => ({
  type: RESET_PASSWORD_FETCH_ERROR,
  errors,
});
