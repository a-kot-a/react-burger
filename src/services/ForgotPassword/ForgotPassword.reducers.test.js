import * as types from './ForgotPassword.actions';
import forgotPasswordReducer, { initialState } from './ForgotPassword.reducers';

describe('ForgotPassword reducer', () => {
  it('should return the initial state', () => {
    expect(forgotPasswordReducer(undefined, {})).toEqual(initialState);
  })

  it('should handle FORGOT_PASSWORD_FETCH_REQUEST', () => {
    expect(
      forgotPasswordReducer(initialState, { type: types.FORGOT_PASSWORD_FETCH_REQUEST })
    ).toEqual({
      ...initialState,
      request: true,
    })
  })

  it('should handle FORGOT_PASSWORD_FETCH_SUCCESS', () => {
    const success = true;

    expect(
      forgotPasswordReducer(initialState, { type: types.FORGOT_PASSWORD_FETCH_SUCCESS, success })
    ).toEqual({
      ...initialState,
      success,
    })
  })

  it('should handle FORGOT_PASSWORD_FETCH_ERROR', () => {
    const errorText = 'Ошибка';

    expect(
      forgotPasswordReducer(initialState, { type: types.FORGOT_PASSWORD_FETCH_ERROR, errors: errorText })
    ).toEqual({
      ...initialState,
      error: errorText,
    })
  })
})
