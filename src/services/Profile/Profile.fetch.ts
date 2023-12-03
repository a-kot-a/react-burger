import { requestWithRefresh } from 'Utils/request';
import { AppDispatch, AppThunk } from 'Types/Store';
import {
  profileFetchRequest,
  profileFetchSuccess,
  profileFetchError,
  profileAuthChecked,
} from './Profile.actions';

export const profileGetFetch: AppThunk = () => (dispatch: AppDispatch) => {
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

export const profileSetFetch: AppThunk = user => (dispatch: AppDispatch) => {
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

export const profileAuthCheckedFetch: AppThunk = () => (dispatch: AppDispatch) => {
  if (localStorage.getItem('accessToken')) {
    // @ts-ignore
    dispatch(profileGetFetch())
    // @ts-ignore
    .finally(() => {
      dispatch(profileAuthChecked(true))
    });
  } else {
    dispatch(profileAuthChecked(true));
  }
};
