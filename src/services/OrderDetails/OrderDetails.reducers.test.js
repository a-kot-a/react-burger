import * as types from './OrderDetails.actions';
import orderDetailsReducer, { initialState } from './OrderDetails.reducers';
import { orderDetails } from './../../tests';

describe('OrderDetails reducer', () => {
  it('should return the initial state', () => {
    expect(orderDetailsReducer(undefined, {})).toEqual(initialState);
  })

  it('should handle ORDER_DETAILS_FETCH_REQUEST', () => {
    expect(
      orderDetailsReducer(initialState, { type: types.ORDER_DETAILS_FETCH_REQUEST })
    ).toEqual({
      ...initialState,
      request: true,
    })
  })

  it('should handle ORDER_DETAILS_FETCH_SUCCESS', () => {
    expect(
      orderDetailsReducer(initialState, { type: types.ORDER_DETAILS_FETCH_SUCCESS, order: orderDetails })
    ).toEqual({
      ...initialState,
      order: orderDetails,
    })
  })

  it('should handle ORDER_DETAILS_FETCH_ERROR', () => {
    const errorText = 'Ошибка';

    expect(
      orderDetailsReducer(initialState, { type: types.ORDER_DETAILS_FETCH_ERROR, errors: errorText })
    ).toEqual({
      ...initialState,
      error: errorText,
    })
  })
})
