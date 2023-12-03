export const RESET_PASSWORD_FETCH_REQUEST: 'RESET_PASSWORD_FETCH_REQUEST' = 'RESET_PASSWORD_FETCH_REQUEST';
export const RESET_PASSWORD_FETCH_SUCCESS: 'RESET_PASSWORD_FETCH_SUCCESS' = 'RESET_PASSWORD_FETCH_SUCCESS';
export const RESET_PASSWORD_FETCH_ERROR: 'RESET_PASSWORD_FETCH_ERROR' = 'RESET_PASSWORD_FETCH_ERROR';

export interface IResetPasswordFetchRequestAction {
  readonly type: typeof RESET_PASSWORD_FETCH_REQUEST;
}

export interface IResetPasswordFetchSuccessAction {
  readonly type: typeof RESET_PASSWORD_FETCH_SUCCESS;
  readonly success: boolean;
}

export interface IResetPasswordFetchErrorAction {
  readonly type: typeof RESET_PASSWORD_FETCH_ERROR;
  readonly errors: string;
}

export type TResetPasswordFetchActions =
  | IResetPasswordFetchRequestAction
  | IResetPasswordFetchSuccessAction
  | IResetPasswordFetchErrorAction;

export const resetPasswordFetchRequest = (): IResetPasswordFetchRequestAction => ({
  type: RESET_PASSWORD_FETCH_REQUEST,
});

export const resetPasswordFetchSuccess = ({ success }: { success: boolean }): IResetPasswordFetchSuccessAction => ({
  type: RESET_PASSWORD_FETCH_SUCCESS,
  success,
});

export const resetPasswordFetchError = (errors: string): IResetPasswordFetchErrorAction => ({
  type: RESET_PASSWORD_FETCH_ERROR,
  errors,
});
