import {
  FORGOT_PASSWORD_FETCH_REQUEST,
  FORGOT_PASSWORD_FETCH_SUCCESS,
  FORGOT_PASSWORD_FETCH_ERROR,
  TForgotPasswordFetchActions,
  IForgotPasswordFetchSuccessAction,
  IForgotPasswordFetchErrorAction,
} from './ForgotPassword.actions';

export type TForgotPasswordState = {
  request: boolean;
  success: boolean,
  error: null | string;
};

const initialState: TForgotPasswordState = {
  request: false,
  success: false,
  error: null,
};

const handleForgotPasswordFetchRequest = (state: TForgotPasswordState): TForgotPasswordState => ({
  ...state,
  request: true,
  success: false,
  error: null,
});

const handleForgotPasswordFetchSuccess = (state: TForgotPasswordState, action: IForgotPasswordFetchSuccessAction): TForgotPasswordState => ({
  ...state,
  request: false,
  success: action.success,
  error: null,
});

const handleForgotPasswordFetchError = (state: TForgotPasswordState, action: IForgotPasswordFetchErrorAction): TForgotPasswordState => ({
  ...state,
  request: false,
  success: false,
  error: action.errors,
});

const forgotPasswordReducer = (state: TForgotPasswordState = initialState, action: TForgotPasswordFetchActions): TForgotPasswordState => {
  const handlers: { [key: string]: Function } = {
    [FORGOT_PASSWORD_FETCH_REQUEST]: handleForgotPasswordFetchRequest,
    [FORGOT_PASSWORD_FETCH_SUCCESS]: handleForgotPasswordFetchSuccess,
    [FORGOT_PASSWORD_FETCH_ERROR]: handleForgotPasswordFetchError,
  };

  return handlers[action.type] ? handlers[action.type](state, action) : state;
};

export default forgotPasswordReducer;
