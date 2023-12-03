import { request } from 'Utils/request';
import { AppDispatch, AppThunk } from 'Types/Store';
import {
  registrationFetchRequest,
  registrationFetchSuccess,
  registrationFetchError,
} from './Registration.actions';
import { profileFetchSuccess } from 'Services/Profile/Profile.actions';

export const registrationFetch: AppThunk = user => (dispatch: AppDispatch) => {
  dispatch(registrationFetchRequest());

  request('auth/register', {
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

      dispatch(registrationFetchSuccess());
      // @ts-ignore
      dispatch(profileFetchSuccess(result));
    })
    .catch(errors => dispatch(registrationFetchError(errors)))
};
