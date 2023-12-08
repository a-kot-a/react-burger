import { request } from 'Utils/request';
import { AppThunk } from 'Types/Store';
import { IUser } from 'Types/User';
import {
  registrationFetchRequest,
  registrationFetchSuccess,
  registrationFetchError,
} from './Registration.actions';
import { profileFetchSuccess } from 'Services/Profile/Profile.actions';

export const registrationFetch = (user: IUser): AppThunk => dispatch => {
  dispatch(registrationFetchRequest());

  request('auth/register', {
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

      dispatch(registrationFetchSuccess());
      dispatch(profileFetchSuccess(result));
    })
    .catch(errors => dispatch(registrationFetchError(errors)))
};
