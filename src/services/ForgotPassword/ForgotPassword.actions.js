export const FORGOT_PASSWORD_FETCH_REQUEST = 'FORGOT_PASSWORD_FETCH_REQUEST';
export const FORGOT_PASSWORD_FETCH_SUCCESS = 'FORGOT_PASSWORD_FETCH_SUCCESS';
export const FORGOT_PASSWORD_FETCH_ERROR = 'FORGOT_PASSWORD_FETCH_ERROR';

export const forgotPasswordFetchRequest = () => ({
  type: FORGOT_PASSWORD_FETCH_REQUEST,
});

export const forgotPasswordFetchSuccess = result => ({
  type: FORGOT_PASSWORD_FETCH_SUCCESS,
  ...result,
});

export const forgotPasswordFetchError = errors => ({
  type: FORGOT_PASSWORD_FETCH_ERROR,
  errors,
});
