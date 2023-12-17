import * as types from './Login.actions';
import loginReducer, { initialState } from './Login.reducers';

describe('Login reducer', () => {
  it('should return the initial state', () => {
    expect(loginReducer(undefined, {})).toEqual(initialState);
  })

  it('should handle LOGIN_FETCH_REQUEST', () => {
    expect(
      loginReducer(initialState, { type: types.LOGIN_FETCH_REQUEST })
    ).toEqual({
      ...initialState,
      request: true,
    })
  })

  it('should handle LOGIN_FETCH_SUCCESS', () => {
    expect(
      loginReducer(initialState, { type: types.LOGIN_FETCH_SUCCESS })
    ).toEqual({
      ...initialState,
    })
  })

  it('should handle LOGIN_FETCH_ERROR', () => {
    const errorText = 'Ошибка';

    expect(
      loginReducer(initialState, { type: types.LOGIN_FETCH_ERROR, errors: errorText })
    ).toEqual({
      ...initialState,
      error: errorText,
    })
  })
})
