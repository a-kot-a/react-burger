import {
  RESET_PASSWORD_FETCH_REQUEST,
  RESET_PASSWORD_FETCH_SUCCESS,
  RESET_PASSWORD_FETCH_ERROR,
  TResetPasswordFetchActions,
  IResetPasswordFetchSuccessAction,
  IResetPasswordFetchErrorAction,
} from './ResetPassword.actions';

export type TResetPasswordState = {
  request: boolean;
  success: boolean,
  error: null | string;
};

export const initialState: TResetPasswordState = {
  request: false,
  success: false,
  error: null,
};

const handleFesetPasswordFetchRequest = (state: TResetPasswordState): TResetPasswordState => ({
  ...state,
  request: true,
  success: false,
  error: null,
});

const handleFesetPasswordFetchSuccess = (state: TResetPasswordState, action: IResetPasswordFetchSuccessAction): TResetPasswordState => ({
  ...state,
  request: false,
  success: action.success,
  error: null,
});

const handleFesetPasswordFetchError = (state: TResetPasswordState, action: IResetPasswordFetchErrorAction): TResetPasswordState => ({
  ...state,
  request: false,
  success: false,
  error: action.errors,
});

const resetPasswordReducer = (state: TResetPasswordState = initialState, action: TResetPasswordFetchActions): TResetPasswordState => {
  const handlers: { [key: string]: Function } = {
    [RESET_PASSWORD_FETCH_REQUEST]: handleFesetPasswordFetchRequest,
    [RESET_PASSWORD_FETCH_SUCCESS]: handleFesetPasswordFetchSuccess,
    [RESET_PASSWORD_FETCH_ERROR]: handleFesetPasswordFetchError,
  };

  return handlers[action.type] ? handlers[action.type](state, action) : state;
};

export default resetPasswordReducer;
