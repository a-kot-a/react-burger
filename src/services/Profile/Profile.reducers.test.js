import * as types from './Profile.actions';
import profileReducer, { initialState } from './Profile.reducers';

describe('Profile reducer', () => {
  it('should return the initial state', () => {
    expect(profileReducer(undefined, {})).toEqual(initialState);
  })

  it('should handle PROFILE_FETCH_REQUEST', () => {
    expect(
      profileReducer(initialState, { type: types.PROFILE_FETCH_REQUEST })
    ).toEqual({
      ...initialState,
      request: true,
    })
  })

  it('should handle PROFILE_FETCH_SUCCESS', () => {
    const user = {
      email: 'test@yandex.ru',
      name: 'Константин'
    };

    expect(
      profileReducer(initialState, { type: types.PROFILE_FETCH_SUCCESS, user })
    ).toEqual({
      ...initialState,
      user: user,
    })
  })

  it('should handle PROFILE_FETCH_ERROR', () => {
    const errorText = 'Ошибка';

    expect(
      profileReducer(initialState, { type: types.PROFILE_FETCH_ERROR, errors: errorText })
    ).toEqual({
      ...initialState,
      error: errorText,
    })
  })

  it('should handle PROFILE_AUTH_CHECKED', () => {
    const payload = true;

    expect(
      profileReducer(initialState, { type: types.PROFILE_AUTH_CHECKED, payload })
    ).toEqual({
      ...initialState,
      isAuthChecked: payload
    })
  })
})
