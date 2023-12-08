import { request } from 'Utils/request';
import { AppThunk } from 'Types/Store';
import { IUser } from 'Types/User';
import {
  resetPasswordFetchRequest,
  resetPasswordFetchSuccess,
  resetPasswordFetchError,
} from './ResetPassword.actions';
import { forgotPasswordFetchSuccess } from 'Services/ForgotPassword/ForgotPassword.actions'

export const resetPasswordFetch = (user: IUser): AppThunk => dispatch => {
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
