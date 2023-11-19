import { request } from 'Utils/request';
import {
  loginFetchRequest,
  loginFetchSuccess,
  loginFetchError,
} from './Login.actions';
import { profileFetchSuccess } from 'Services/Profile/Profile.actions';

export const loginFetch = user => dispatch => {
  dispatch(loginFetchRequest())

  request('auth/login', {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(user),
  })
    .then(result => {
      const accessToken = result.accessToken.split('Bearer ')[1];

      if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
      }

      localStorage.setItem('refreshToken', result.refreshToken);

      dispatch(loginFetchSuccess());
      dispatch(profileFetchSuccess(result));
    })
    .catch(errors => dispatch(loginFetchError(errors)))
};

export const logoutFetch = () => dispatch => {
  dispatch(loginFetchRequest())
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

