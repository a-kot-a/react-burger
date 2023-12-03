import { request } from 'Utils/request';
import { AppDispatch, AppThunk } from 'Types/Store';
import {
  resetPasswordFetchRequest,
  resetPasswordFetchSuccess,
  resetPasswordFetchError,
} from './ResetPassword.actions';
import { forgotPasswordFetchSuccess } from 'Services/ForgotPassword/ForgotPassword.actions'

export const resetPasswordFetch: AppThunk = user => (dispatch: AppDispatch) => {
  dispatch(resetPasswordFetchRequest());

  request('password-reset/reset', {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(user),
  })
    .then(result => {
      dispatch(resetPasswordFetchSuccess(result));
      dispatch(forgotPasswordFetchSuccess({ success: false }));
    })
    .catch(errors => dispatch(resetPasswordFetchError(errors)))
};
