import {
  ORDER_CHECKOUT_FETCH_REQUEST,
  ORDER_CHECKOUT_FETCH_SUCCESS,
  ORDER_CHECKOUT_FETCH_ERROR,
  TOrderCheckoutFetchActions,
  IOrderCheckoutFetchSuccessAction,
  IOrderCheckoutFetchErrorAction,
} from './OrderCheckout.actions';

export type TOrderCheckoutState = {
  name: null | string;
  number: null | number;
  request: boolean,
  error: null | string;
};

const initialState: TOrderCheckoutState = {
  name: null,
  number: null,
  request: false,
  error: null,
};

const handleOrderCheckoutFetchRequest = (state: TOrderCheckoutState): TOrderCheckoutState => ({
  ...state,
  name: null,
  number: null,
  request: true,
  error: null,
});

const handleOrderCheckoutFetchSuccess = (state: TOrderCheckoutState, action: IOrderCheckoutFetchSuccessAction): TOrderCheckoutState => ({
  ...state,
  name: action.name,
  number: action.number,
  request: false,
  error: null,
});

const handleOrderCheckoutFetchError = (state: TOrderCheckoutState, action: IOrderCheckoutFetchErrorAction): TOrderCheckoutState => ({
  ...state,
  name: null,
  number: null,
  request: false,
  error: action.errors,
});

const orderCheckoutReducer = (state: TOrderCheckoutState = initialState, action: TOrderCheckoutFetchActions ): TOrderCheckoutState => {
  const handlers: { [key: string]: Function } = {
    [ORDER_CHECKOUT_FETCH_REQUEST]: handleOrderCheckoutFetchRequest,
    [ORDER_CHECKOUT_FETCH_SUCCESS]: handleOrderCheckoutFetchSuccess,
    [ORDER_CHECKOUT_FETCH_ERROR]: handleOrderCheckoutFetchError,
  };

  return handlers[action.type] ? handlers[action.type](state, action) : state;
};

export default orderCheckoutReducer;
