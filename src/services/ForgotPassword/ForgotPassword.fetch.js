import { request } from 'Utils/request';
import {
  forgotPasswordFetchRequest,
  forgotPasswordFetchSuccess,
  forgotPasswordFetchError,
} from './ForgotPassword.actions';
import { resetPasswordFetchSuccess } from 'Services/ResetPassword/ResetPassword.actions'

export const forgotPasswordFetch = user => dispatch => {
  dispatch(forgotPasswordFetchRequest())

  request('password-reset', {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(user),
  })
    .then(result => {
      dispatch(forgotPasswordFetchSuccess(result));
      dispatch(resetPasswordFetchSuccess({ success: null }));
    })
    .catch(errors => dispatch(forgotPasswordFetchError(errors)))
};
