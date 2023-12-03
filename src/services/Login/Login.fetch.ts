import { request } from 'Utils/request';
import { AppDispatch, AppThunk } from 'Types/Store';
import {
  loginFetchRequest,
  loginFetchSuccess,
  loginFetchError,
} from './Login.actions';
import { profileFetchSuccess } from 'Services/Profile/Profile.actions';

export const loginFetch: AppThunk = user => (dispatch: AppDispatch) => {
  dispatch(loginFetchRequest())

  request('auth/login', {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(user),
  })
    .then(result => {
      // @ts-ignore
      const accessToken = result.accessToken.split('Bearer ')[1];

      if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
      }
      // @ts-ignore
      localStorage.setItem('refreshToken', result.refreshToken);

      dispatch(loginFetchSuccess());
      // @ts-ignore
      dispatch(profileFetchSuccess(result));
    })
    .catch(errors => dispatch(loginFetchError(errors)))
};

export const logoutFetch: AppThunk = () => (dispatch: AppDispatch) => {
  dispatch(loginFetchRequest());

  request('auth/logout', {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify({
      token: localStorage.getItem('refreshToken')
    }),
  })
    .then(() => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');

      dispatch(loginFetchSuccess());
      dispatch(profileFetchSuccess({user: null}));
    })
    .catch(errors => dispatch(loginFetchError(errors)))
};
