export const FORGOT_PASSWORD_FETCH_REQUEST: 'FORGOT_PASSWORD_FETCH_REQUEST' = 'FORGOT_PASSWORD_FETCH_REQUEST';
export const FORGOT_PASSWORD_FETCH_SUCCESS: 'FORGOT_PASSWORD_FETCH_SUCCESS' = 'FORGOT_PASSWORD_FETCH_SUCCESS';
export const FORGOT_PASSWORD_FETCH_ERROR: 'FORGOT_PASSWORD_FETCH_ERROR' = 'FORGOT_PASSWORD_FETCH_ERROR';

export interface IForgotPasswordFetchRequestAction {
  readonly type: typeof FORGOT_PASSWORD_FETCH_REQUEST;
}

export interface IForgotPasswordFetchSuccessAction {
  readonly type: typeof FORGOT_PASSWORD_FETCH_SUCCESS;
  readonly success: boolean;
}

export interface IForgotPasswordFetchErrorAction {
  readonly type: typeof FORGOT_PASSWORD_FETCH_ERROR;
  readonly errors: string;
}

export type TForgotPasswordFetchActions =
  | IForgotPasswordFetchRequestAction
  | IForgotPasswordFetchSuccessAction
  | IForgotPasswordFetchErrorAction;

export const forgotPasswordFetchRequest = (): IForgotPasswordFetchRequestAction => ({
  type: FORGOT_PASSWORD_FETCH_REQUEST,
});

export const forgotPasswordFetchSuccess = ({ success }: { success: boolean }): IForgotPasswordFetchSuccessAction => ({
  type: FORGOT_PASSWORD_FETCH_SUCCESS,
  success,
});

export const forgotPasswordFetchError = (errors: string): IForgotPasswordFetchErrorAction => ({
  type: FORGOT_PASSWORD_FETCH_ERROR,
  errors,
});
