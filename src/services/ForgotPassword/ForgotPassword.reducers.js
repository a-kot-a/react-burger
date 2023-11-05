import { fromJS } from 'immutable';
import {
  FORGOT_PASSWORD_FETCH_REQUEST,
  FORGOT_PASSWORD_FETCH_SUCCESS,
  FORGOT_PASSWORD_FETCH_ERROR,
} from './ForgotPassword.actions';

const initialState = fromJS({
  request: false,
  success: null,
  error: false,
});

const handleForgotPasswordFetchRequest = state =>
  state.set('error', false)
    .set('success', null)
    .set('request', true);

const handleForgotPasswordFetchSuccess = (state, action) =>
  state.set('request', false)
    .set('error', false)
    .set('success', action.success);

const handleForgotPasswordFetchError = (state, action) =>
 state.set('request', false)
    .set('success', null)
    .set('error', action.errors);

const forgotPasswordReducer = (state = initialState, action) => {
  const handlers = {
    [FORGOT_PASSWORD_FETCH_REQUEST]: handleForgotPasswordFetchRequest,
    [FORGOT_PASSWORD_FETCH_SUCCESS]: handleForgotPasswordFetchSuccess,
    [FORGOT_PASSWORD_FETCH_ERROR]: handleForgotPasswordFetchError,
  };

  return handlers[action.type] ? handlers[action.type](state, action) : state;
};

export default forgotPasswordReducer;
