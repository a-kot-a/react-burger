import * as types from './ResetPassword.actions';
import resetPasswordReducer, { initialState } from './ResetPassword.reducers';

describe('ResetPassword reducer', () => {
  it('should return the initial state', () => {
    expect(resetPasswordReducer(undefined, {})).toEqual(initialState);
  })

  it('should handle RESET_PASSWORD_FETCH_REQUEST', () => {
    expect(
      resetPasswordReducer(initialState, { type: types.RESET_PASSWORD_FETCH_REQUEST })
    ).toEqual({
      ...initialState,
      request: true,
    })
  })

  it('should handle RESET_PASSWORD_FETCH_SUCCESS', () => {
    const success = true;

    expect(
      resetPasswordReducer(initialState, { type: types.RESET_PASSWORD_FETCH_SUCCESS, success })
    ).toEqual({
      ...initialState,
      success,
    })
  })

  it('should handle RESET_PASSWORD_FETCH_ERROR', () => {
    const errorText = 'Ошибка';

    expect(
      resetPasswordReducer(initialState, { type: types.RESET_PASSWORD_FETCH_ERROR, errors: errorText })
    ).toEqual({
      ...initialState,
      error: errorText,
    })
  })
})
