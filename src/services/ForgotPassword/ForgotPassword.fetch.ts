import { request } from 'Utils/request';
import { AppDispatch, AppThunk } from 'Types/Store';
import {
  forgotPasswordFetchRequest,
  forgotPasswordFetchSuccess,
  forgotPasswordFetchError,
} from './ForgotPassword.actions';
import { resetPasswordFetchSuccess } from 'Services/ResetPassword/ResetPassword.actions'

export const forgotPasswordFetch: AppThunk = user => (dispatch: AppDispatch) => {
  dispatch(forgotPasswordFetchRequest());

  request('password-reset', {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(user),
  })
    .then(result => {
      dispatch(forgotPasswordFetchSuccess(result));
      dispatch(resetPasswordFetchSuccess({ success: false }));
    })
    .catch(errors => dispatch(forgotPasswordFetchError(errors)))
};
