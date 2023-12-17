import * as types from './Registration.actions';
import registrationReducer, { initialState } from './Registration.reducers';

describe('Registration reducer', () => {
  it('should return the initial state', () => {
    expect(registrationReducer(undefined, {})).toEqual(initialState);
  })

  it('should handle REGISTRATION_FETCH_REQUEST', () => {
    expect(
      registrationReducer(initialState, { type: types.REGISTRATION_FETCH_REQUEST })
    ).toEqual({
      ...initialState,
      request: true,
    })
  })

  it('should handle REGISTRATION_FETCH_SUCCESS', () => {
    expect(
      registrationReducer(initialState, { type: types.REGISTRATION_FETCH_SUCCESS })
    ).toEqual({
      ...initialState,
    })
  })

  it('should handle REGISTRATION_FETCH_ERROR', () => {
    const errorText = 'Ошибка';

    expect(
      registrationReducer(initialState, { type: types.REGISTRATION_FETCH_ERROR, errors: errorText })
    ).toEqual({
      ...initialState,
      error: errorText,
    })
  })
})
