export const LOGIN_FETCH_REQUEST: 'LOGIN_FETCH_REQUEST' = 'LOGIN_FETCH_REQUEST';
export const LOGIN_FETCH_SUCCESS: 'LOGIN_FETCH_SUCCESS' = 'LOGIN_FETCH_SUCCESS';
export const LOGIN_FETCH_ERROR: 'LOGIN_FETCH_ERROR' = 'LOGIN_FETCH_ERROR';

export interface ILoginFetchRequestAction {
  readonly type: typeof LOGIN_FETCH_REQUEST;
}

export interface ILoginFetchSuccessAction {
  readonly type: typeof LOGIN_FETCH_SUCCESS;
}

export interface ILoginFetchErrorAction {
  readonly type: typeof LOGIN_FETCH_ERROR;
  readonly errors: string;
}

export type TLoginFetchActions =
  | ILoginFetchRequestAction
  | ILoginFetchSuccessAction
  | ILoginFetchErrorAction;

export const loginFetchRequest = (): ILoginFetchRequestAction => ({
  type: LOGIN_FETCH_REQUEST,
});

export const loginFetchSuccess = (): ILoginFetchSuccessAction => ({
  type: LOGIN_FETCH_SUCCESS,
});

export const loginFetchError = (errors: string): ILoginFetchErrorAction => ({
  type: LOGIN_FETCH_ERROR,
  errors,
});
