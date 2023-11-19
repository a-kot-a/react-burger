import { requestWithRefresh } from 'Utils/request';
import {
  profileFetchRequest,
  profileFetchSuccess,
  profileFetchError,
  profileAuthChecked,
} from './Profile.actions';

export const profileGetFetch = () => dispatch => {
  dispatch(profileFetchRequest())

  return requestWithRefresh('auth/user', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('accessToken')
    },
  })
    .then(result => dispatch(profileFetchSuccess(result)))
    .catch(errors => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');

      dispatch(profileFetchError(errors));
    })
};

export const profileSetFetch = user => dispatch => {
  dispatch(profileFetchRequest())

  return requestWithRefresh('auth/user', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('accessToken')
    },
    method: 'PATCH',
    body: JSON.stringify(user),
  })
    .then(result => dispatch(profileFetchSuccess(result)))
    .catch(errors => dispatch(profileFetchError(errors)))
};

export const profileAuthCheckedFetch = () => dispatch => {
  if (localStorage.getItem('accessToken')) {
    dispatch(profileGetFetch())
    .finally(() => {
      dispatch(profileAuthChecked(true))
    });
  } else {
    dispatch(profileAuthChecked(true));
  }
};
