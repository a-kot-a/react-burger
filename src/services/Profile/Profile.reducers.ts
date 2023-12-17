import { IUser } from 'Types/User';

import {
  PROFILE_FETCH_REQUEST,
  PROFILE_FETCH_SUCCESS,
  PROFILE_FETCH_ERROR,
  PROFILE_AUTH_CHECKED,
  TProfileFetchActions,
  IProfileFetchSuccessAction,
  IProfileFetchErrorAction,
  IProfileAuthCheckedAction,
} from './Profile.actions';

export type TProfileState = {
  user: IUser | null;
  request: boolean;
  error: null | string;
  isAuthChecked: boolean;
};

export const initialState: TProfileState = {
  user: null,
  request: false,
  error: null,
  isAuthChecked: false,
};

const handleProfileFetchRequest = (state: TProfileState): TProfileState => ({
  ...state,
  request: true,
  error: null,
});

const handleProfileFetchSuccess = (state: TProfileState, action: IProfileFetchSuccessAction): TProfileState => ({
  ...state,
  user: action.user,
  request: false,
  error: null,
});

const handleProfileFetchError = (state: TProfileState, action: IProfileFetchErrorAction): TProfileState => ({
  ...state,
  user: null,
  request: false,
  error: action.errors,
});

const handleProfileAuthChecked = (state: TProfileState, action: IProfileAuthCheckedAction): TProfileState => ({
  ...state,
  isAuthChecked: action.payload
});

const profileReducer = (state: TProfileState = initialState, action: TProfileFetchActions): TProfileState => {
  const handlers: { [key: string]: Function } = {
    [PROFILE_FETCH_REQUEST]: handleProfileFetchRequest,
    [PROFILE_FETCH_SUCCESS]: handleProfileFetchSuccess,
    [PROFILE_FETCH_ERROR]: handleProfileFetchError,
    [PROFILE_AUTH_CHECKED]: handleProfileAuthChecked,
  };

  return handlers[action.type] ? handlers[action.type](state, action) : state;
};

export default profileReducer;
