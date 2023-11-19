import { fromJS } from 'immutable';
import {
  REGISTRATION_FETCH_REQUEST,
  REGISTRATION_FETCH_SUCCESS,
  REGISTRATION_FETCH_ERROR,
} from './Registration.actions';

const initialState = fromJS({
  request: false,
  error: null,
});

const handleRegistrationFetchRequest = state =>
  state.set('error', false)
    .set('request', true);

const handleRegistrationFetchSuccess = state =>
  state.set('request', false)
    .set('error', false);

const handleRegistrationFetchError = (state, action) =>
 state.set('request', false)
    .set('error', action.errors);

const registrationReducer = (state = initialState, action) => {
  const handlers = {
    [REGISTRATION_FETCH_REQUEST]: handleRegistrationFetchRequest,
    [REGISTRATION_FETCH_SUCCESS]: handleRegistrationFetchSuccess,
    [REGISTRATION_FETCH_ERROR]: handleRegistrationFetchError,
  };

  return handlers[action.type] ? handlers[action.type](state, action) : state;
};

export default registrationReducer;
