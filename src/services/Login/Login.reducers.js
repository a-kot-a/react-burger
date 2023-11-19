import { fromJS } from 'immutable';
import {
  LOGIN_FETCH_REQUEST,
  LOGIN_FETCH_SUCCESS,
  LOGIN_FETCH_ERROR,
} from './Login.actions';

const initialState = fromJS({
  request: false,
  error: null,
});

const handleLoginFetchRequest = state =>
  state.set('error', false)
    .set('request', true);

const handleLoginFetchSuccess = state =>
  state.set('request', false)
    .set('error', false);

const handleLoginFetchError = (state, action) =>
 state.set('request', false)
    .set('error', action.errors);

const loginReducer = (state = initialState, action) => {
  const handlers = {
    [LOGIN_FETCH_REQUEST]: handleLoginFetchRequest,
    [LOGIN_FETCH_SUCCESS]: handleLoginFetchSuccess,
    [LOGIN_FETCH_ERROR]: handleLoginFetchError,
  };

  return handlers[action.type] ? handlers[action.type](state, action) : state;
};

export default loginReducer;
