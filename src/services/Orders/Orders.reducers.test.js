import * as types from './Orders.actions';
import { WebSocketStatus } from '../../types/Ws';
import ordersReducer, { initialState } from './Orders.reducers';
import { orders } from './../../tests';

describe('Orders reducer', () => {
  it('should return the initial state', () => {
    expect(ordersReducer(undefined, {})).toEqual(initialState);
  })

  it('should handle wsConnecting', () => {
    expect(
      ordersReducer(initialState, { type: types.wsConnecting })
    ).toEqual({
      ...initialState,
      status: WebSocketStatus.CONNECTING,
    })
  })

  it('should handle wsOpen', () => {
    expect(
      ordersReducer(initialState, { type: types.wsOpen })
    ).toEqual({
      ...initialState,
      status: WebSocketStatus.ONLINE,
      connectionError: '',
    })
  })

  it('should handle wsClose', () => {
    expect(
      ordersReducer(initialState, { type: types.wsClose })
    ).toEqual({
      ...initialState,
      status: WebSocketStatus.OFFLINE,
    })
  })

  it('should handle wsError', () => {
    const payload = 'Ошибка';

    expect(
      ordersReducer(initialState, { type: types.wsError, payload })
    ).toEqual({
      ...initialState,
      connectionError: payload,
    })
  })

  it('should handle wsMessage', () => {
    const payload = orders;

    expect(
      ordersReducer(initialState, { type: types.wsMessage, payload })
    ).toEqual({
      ...initialState,
      orders: payload.orders,
    })
  })
})
