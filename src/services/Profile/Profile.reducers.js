import { fromJS } from 'immutable';
import {
  PROFILE_FETCH_REQUEST,
  PROFILE_FETCH_SUCCESS,
  PROFILE_FETCH_ERROR,
  PROFILE_AUTH_CHECKED,
} from './Profile.actions';

const initialState = fromJS({
  user: null,
  request: false,
  error: null,
  isAuthChecked: false,
});

const handleProfileFetchRequest = state =>
  state.set('error', false)
    .set('request', true);

const handleProfileFetchSuccess = (state, action) =>
  state.set('request', false)
    .set('error', false)
    .set('user', action.user);

const handleProfileFetchError = (state, action) =>
 state.set('request', false)
    .set('user', null)
    .set('error', action.errors);

const handleProfileAuthChecked = (state, action) =>
  state.set('isAuthChecked', action.payload);

const profileReducer = (state = initialState, action) => {
  const handlers = {
    [PROFILE_FETCH_REQUEST]: handleProfileFetchRequest,
    [PROFILE_FETCH_SUCCESS]: handleProfileFetchSuccess,
    [PROFILE_FETCH_ERROR]: handleProfileFetchError,
    [PROFILE_AUTH_CHECKED]: handleProfileAuthChecked,
  };

  return handlers[action.type] ? handlers[action.type](state, action) : state;
};

export default profileReducer;
