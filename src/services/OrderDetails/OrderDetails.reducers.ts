import {
  ORDER_DETAILS_FETCH_REQUEST,
  ORDER_DETAILS_FETCH_SUCCESS,
  ORDER_DETAILS_FETCH_ERROR,
  TOrderDetailsFetchActions,
  IOrderDetailsFetchSuccessAction,
  IOrderDetailsFetchErrorAction,
} from './OrderDetails.actions';

import { IOrder } from 'Types/Order';

export type TOrderDetailsState = {
  order: IOrder | null,
  request: boolean,
  error: null | string;
};

export const initialState: TOrderDetailsState = {
  order: null,
  request: false,
  error: null,
};

const handleOrderDetailsFetchRequest = (state: TOrderDetailsState): TOrderDetailsState => ({
  ...state,
  order: null,
  request: true,
  error: null,
});

const handleOrderDetailsFetchSuccess = (state: TOrderDetailsState, action: IOrderDetailsFetchSuccessAction): TOrderDetailsState => ({
  ...state,
  order: action.order,
  request: false,
  error: null,
});

const handleOrderDetailsFetchError = (state: TOrderDetailsState, action: IOrderDetailsFetchErrorAction): TOrderDetailsState => ({
  ...state,
  order: null,
  request: false,
  error: action.errors,
});

const orderDetailsReducer = (state: TOrderDetailsState = initialState, action: TOrderDetailsFetchActions ): TOrderDetailsState => {
  const handlers: { [key: string]: Function } = {
    [ORDER_DETAILS_FETCH_REQUEST]: handleOrderDetailsFetchRequest,
    [ORDER_DETAILS_FETCH_SUCCESS]: handleOrderDetailsFetchSuccess,
    [ORDER_DETAILS_FETCH_ERROR]: handleOrderDetailsFetchError,
  };

  return handlers[action.type] ? handlers[action.type](state, action) : state;
};

export default orderDetailsReducer;
