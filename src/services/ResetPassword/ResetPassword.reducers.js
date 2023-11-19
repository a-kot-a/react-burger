import { fromJS } from 'immutable';
import {
  RESET_PASSWORD_FETCH_REQUEST,
  RESET_PASSWORD_FETCH_SUCCESS,
  RESET_PASSWORD_FETCH_ERROR,
} from './ResetPassword.actions';

const initialState = fromJS({
  request: false,
  success: null,
  error: false,
});

const handleFesetPasswordFetchRequest = state =>
  state.set('error', false)
    .set('success', null)
    .set('request', true);

const handleFesetPasswordFetchSuccess = (state, action) =>
  state.set('request', false)
    .set('error', false)
    .set('success', action.success);

const handleFesetPasswordFetchError = (state, action) =>
 state.set('request', false)
    .set('success', null)
    .set('error', action.errors);

const resetPasswordReducer = (state = initialState, action) => {
  const handlers = {
    [RESET_PASSWORD_FETCH_REQUEST]: handleFesetPasswordFetchRequest,
    [RESET_PASSWORD_FETCH_SUCCESS]: handleFesetPasswordFetchSuccess,
    [RESET_PASSWORD_FETCH_ERROR]: handleFesetPasswordFetchError,
  };

  return handlers[action.type] ? handlers[action.type](state, action) : state;
};

export default resetPasswordReducer;
