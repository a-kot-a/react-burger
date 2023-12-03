import { IUser } from 'Types/User';

export const PROFILE_FETCH_REQUEST: 'PROFILE_FETCH_REQUEST' = 'PROFILE_FETCH_REQUEST';
export const PROFILE_FETCH_SUCCESS: 'PROFILE_FETCH_SUCCESS' = 'PROFILE_FETCH_SUCCESS';
export const PROFILE_FETCH_ERROR: 'PROFILE_FETCH_ERROR' = 'PROFILE_FETCH_ERROR';
export const PROFILE_AUTH_CHECKED: 'PROFILE_AUTH_CHECKED' = 'PROFILE_AUTH_CHECKED';

export interface IProfileFetchRequestAction {
  readonly type: typeof PROFILE_FETCH_REQUEST;
}

export interface IProfileFetchSuccessAction {
  readonly type: typeof PROFILE_FETCH_SUCCESS;
  readonly user: IUser | null;
}

export interface IProfileFetchErrorAction {
  readonly type: typeof PROFILE_FETCH_ERROR;
  readonly errors: string;
}

export interface IProfileAuthCheckedAction {
  readonly type: typeof PROFILE_AUTH_CHECKED;
  readonly payload: boolean;
}

export type TProfileFetchActions =
  | IProfileFetchRequestAction
  | IProfileFetchSuccessAction
  | IProfileFetchErrorAction
  | IProfileAuthCheckedAction;

export const profileFetchRequest = (): IProfileFetchRequestAction => ({
  type: PROFILE_FETCH_REQUEST,
});

export const profileFetchSuccess = ({ user }: { user: IUser | null }): IProfileFetchSuccessAction => ({
  type: PROFILE_FETCH_SUCCESS,
  user,
});

export const profileFetchError = (errors: string): IProfileFetchErrorAction => ({
  type: PROFILE_FETCH_ERROR,
  errors,
});

export const profileAuthChecked = (payload: boolean): IProfileAuthCheckedAction => ({
  type: PROFILE_AUTH_CHECKED,
  payload,
});
