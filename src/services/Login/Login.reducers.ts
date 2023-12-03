import {
  LOGIN_FETCH_REQUEST,
  LOGIN_FETCH_SUCCESS,
  LOGIN_FETCH_ERROR,
  TLoginFetchActions,
  ILoginFetchErrorAction,
} from './Login.actions';

export type TLoginState = {
  request: boolean;
  error: null | string;
};

const initialState: TLoginState = {
  request: false,
  error: null,
};

const handleLoginFetchRequest = (state: TLoginState): TLoginState => ({
  ...state,
  request: true,
  error: null,
});

const handleLoginFetchSuccess = (state: TLoginState): TLoginState => ({
  ...state,
  request: false,
  error: null,
});

const handleLoginFetchError = (state: TLoginState, action: ILoginFetchErrorAction): TLoginState => ({
  ...state,
  request: false,
  error: action.errors,
});

const loginReducer = (state = initialState, action: TLoginFetchActions): TLoginState => {
  const handlers: { [key: string]: Function } = {
    [LOGIN_FETCH_REQUEST]: handleLoginFetchRequest,
    [LOGIN_FETCH_SUCCESS]: handleLoginFetchSuccess,
    [LOGIN_FETCH_ERROR]: handleLoginFetchError,
  };

  return handlers[action.type] ? handlers[action.type](state, action) : state;
};

export default loginReducer;
