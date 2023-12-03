export const ORDER_CHECKOUT_FETCH_REQUEST: 'ORDER_CHECKOUT_FETCH_REQUEST' = 'ORDER_CHECKOUT_FETCH_REQUEST';
export const ORDER_CHECKOUT_FETCH_SUCCESS: 'ORDER_CHECKOUT_FETCH_SUCCESS' = 'ORDER_CHECKOUT_FETCH_SUCCESS';
export const ORDER_CHECKOUT_FETCH_ERROR: 'ORDER_CHECKOUT_FETCH_ERROR' = 'ORDER_CHECKOUT_FETCH_ERROR';

export interface IOrderCheckoutFetchRequestAction {
  readonly type: typeof ORDER_CHECKOUT_FETCH_REQUEST;
}

export interface IOrderCheckoutFetchSuccessAction {
  readonly type: typeof ORDER_CHECKOUT_FETCH_SUCCESS;
  readonly name: string;
  readonly number: number;
}

export interface IOrderCheckoutFetchErrorAction {
  readonly type: typeof ORDER_CHECKOUT_FETCH_ERROR;
  readonly errors: string;
}

export type TOrderCheckoutFetchActions =
  | IOrderCheckoutFetchRequestAction
  | IOrderCheckoutFetchSuccessAction
  | IOrderCheckoutFetchErrorAction;

export const orderCheckoutFetchRequest = (): IOrderCheckoutFetchRequestAction => ({
  type: ORDER_CHECKOUT_FETCH_REQUEST,
});

export const orderCheckoutFetchSuccess = ({
  name, order: { number } }: { name: string, order: { number: number }
}): IOrderCheckoutFetchSuccessAction => ({
  type: ORDER_CHECKOUT_FETCH_SUCCESS,
  name,
  number,
});

export const orderCheckoutFetchError = (errors: string): IOrderCheckoutFetchErrorAction => ({
  type: ORDER_CHECKOUT_FETCH_ERROR,
  errors,
});
