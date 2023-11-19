import { request } from 'Utils/request';
import {
  resetPasswordFetchRequest,
  resetPasswordFetchSuccess,
  resetPasswordFetchError,
} from './ResetPassword.actions';
import { forgotPasswordFetchSuccess } from 'Services/ForgotPassword/ForgotPassword.actions'

export const resetPasswordFetch = user => dispatch => {
  dispatch(resetPasswordFetchRequest())

  request('password-reset/reset', {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(user),
  })
    .then(result => {
      dispatch(resetPasswordFetchSuccess(result));
      dispatch(forgotPasswordFetchSuccess({ success: null }));
    })
    .catch(errors => dispatch(resetPasswordFetchError(errors)))
};
