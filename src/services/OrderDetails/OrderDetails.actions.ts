import { IOrder } from 'Types/Order';

export const ORDER_DETAILS_FETCH_REQUEST: 'ORDER_DETAILS_FETCH_REQUEST' = 'ORDER_DETAILS_FETCH_REQUEST';
export const ORDER_DETAILS_FETCH_SUCCESS: 'ORDER_DETAILS_FETCH_SUCCESS' = 'ORDER_DETAILS_FETCH_SUCCESS';
export const ORDER_DETAILS_FETCH_ERROR: 'ORDER_DETAILS_FETCH_ERROR' = 'ORDER_DETAILS_FETCH_ERROR';

export interface IOrderDetailsFetchRequestAction {
  readonly type: typeof ORDER_DETAILS_FETCH_REQUEST;
}

export interface IOrderDetailsFetchSuccessAction {
  readonly type: typeof ORDER_DETAILS_FETCH_SUCCESS;
  readonly order: IOrder;
}

export interface IOrderDetailsFetchErrorAction {
  readonly type: typeof ORDER_DETAILS_FETCH_ERROR;
  readonly errors: string;
}

export type TOrderDetailsFetchActions =
  | IOrderDetailsFetchRequestAction
  | IOrderDetailsFetchSuccessAction
  | IOrderDetailsFetchErrorAction;

export const orderDetailsFetchRequest = (): IOrderDetailsFetchRequestAction => ({
  type: ORDER_DETAILS_FETCH_REQUEST,
});

export const orderDetailsFetchSuccess = (order: IOrder): IOrderDetailsFetchSuccessAction => ({
  type: ORDER_DETAILS_FETCH_SUCCESS,
  order,
});

export const orderDetailsFetchError = (errors: string): IOrderDetailsFetchErrorAction => ({
  type: ORDER_DETAILS_FETCH_ERROR,
  errors,
});
