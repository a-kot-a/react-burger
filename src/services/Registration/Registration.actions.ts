export const REGISTRATION_FETCH_REQUEST: 'REGISTRATION_FETCH_REQUEST' = 'REGISTRATION_FETCH_REQUEST';
export const REGISTRATION_FETCH_SUCCESS: 'REGISTRATION_FETCH_SUCCESS' = 'REGISTRATION_FETCH_SUCCESS';
export const REGISTRATION_FETCH_ERROR: 'REGISTRATION_FETCH_ERROR' = 'REGISTRATION_FETCH_ERROR';

export interface IRegistrationFetchRequestAction {
  readonly type: typeof REGISTRATION_FETCH_REQUEST;
}

export interface IRegistrationFetchSuccessAction {
  readonly type: typeof REGISTRATION_FETCH_SUCCESS;
}

export interface IRegistrationFetchErrorAction {
  readonly type: typeof REGISTRATION_FETCH_ERROR;
  readonly errors: string;
}

export type TRegistrationFetchActions =
  | IRegistrationFetchRequestAction
  | IRegistrationFetchSuccessAction
  | IRegistrationFetchErrorAction;

export const registrationFetchRequest = (): IRegistrationFetchRequestAction => ({
  type: REGISTRATION_FETCH_REQUEST,
});

export const registrationFetchSuccess = (): IRegistrationFetchSuccessAction => ({
  type: REGISTRATION_FETCH_SUCCESS,
});

export const registrationFetchError = (errors: string): IRegistrationFetchErrorAction => ({
  type: REGISTRATION_FETCH_ERROR,
  errors,
});
