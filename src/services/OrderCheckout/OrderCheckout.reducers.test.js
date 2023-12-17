import * as types from './OrderCheckout.actions';
import orderCheckoutReducer, { initialState } from './OrderCheckout.reducers';

describe('OrderCheckout reducer', () => {
  it('should return the initial state', () => {
    expect(orderCheckoutReducer(undefined, {})).toEqual(initialState);
  })

  it('should handle ORDER_CHECKOUT_FETCH_REQUEST', () => {
    expect(
      orderCheckoutReducer(initialState, { type: types.ORDER_CHECKOUT_FETCH_REQUEST })
    ).toEqual({
      ...initialState,
      request: true,
    })
  })

  it('should handle ORDER_CHECKOUT_FETCH_SUCCESS', () => {
    const name = 'Экзо-плантаго астероидный краторный бургер';
    const number = 29464;

    expect(
      orderCheckoutReducer(initialState, { type: types.ORDER_CHECKOUT_FETCH_SUCCESS, name, number })
    ).toEqual({
      ...initialState,
      name,
      number,
    })
  })

  it('should handle ORDER_CHECKOUT_FETCH_ERROR', () => {
    const errorText = 'Ошибка';

    expect(
      orderCheckoutReducer(initialState, { type: types.ORDER_CHECKOUT_FETCH_ERROR, errors: errorText })
    ).toEqual({
      ...initialState,
      error: errorText,
    })
  })
})
