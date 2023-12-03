import {
  REGISTRATION_FETCH_REQUEST,
  REGISTRATION_FETCH_SUCCESS,
  REGISTRATION_FETCH_ERROR,
  TRegistrationFetchActions,
  IRegistrationFetchErrorAction,
} from './Registration.actions';

export type TRegistrationState = {
  request: boolean;
  error: null | string;
};

const initialState: TRegistrationState = {
  request: false,
  error: null,
};

const handleRegistrationFetchRequest = (state: TRegistrationState): TRegistrationState => ({
  ...state,
  request: true,
  error: null,
});

const handleRegistrationFetchSuccess = (state: TRegistrationState): TRegistrationState => ({
  ...state,
  request: false,
  error: null,
});

const handleRegistrationFetchError = (state: TRegistrationState, action: IRegistrationFetchErrorAction): TRegistrationState => ({
  ...state,
  request: false,
  error: action.errors,
});

const registrationReducer = (state: TRegistrationState = initialState, action: TRegistrationFetchActions): TRegistrationState => {
  const handlers: { [key: string]: Function } = {
    [REGISTRATION_FETCH_REQUEST]: handleRegistrationFetchRequest,
    [REGISTRATION_FETCH_SUCCESS]: handleRegistrationFetchSuccess,
    [REGISTRATION_FETCH_ERROR]: handleRegistrationFetchError,
  };

  return handlers[action.type] ? handlers[action.type](state, action) : state;
};

export default registrationReducer;
