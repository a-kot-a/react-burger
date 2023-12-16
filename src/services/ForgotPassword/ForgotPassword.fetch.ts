import { request } from 'Utils/request';
import { AppThunk } from 'Types/Store';
import { IUser } from 'Types/User';
import {
  forgotPasswordFetchRequest,
  forgotPasswordFetchSuccess,
  forgotPasswordFetchError,
} from './ForgotPassword.actions';
import { resetPasswordFetchSuccess } from 'Services/ResetPassword/ResetPassword.actions'

export const forgotPasswordFetch = (user: IUser): AppThunk => dispatch => {
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
