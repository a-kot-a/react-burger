import * as types from './Feed.actions';
import { WebSocketStatus } from '../../types/Ws';
import feedReducer, { initialState } from './Feed.reducers';
import { ordersFeed } from './../../tests';

describe('Feed reducer', () => {
  it('should return the initial state', () => {
    expect(feedReducer(undefined, {})).toEqual(initialState);
  })

  it('should handle wsConnecting', () => {
    expect(
      feedReducer(initialState, { type: types.wsConnecting })
    ).toEqual({
      ...initialState,
      status: WebSocketStatus.CONNECTING,
    })
  })

  it('should handle wsOpen', () => {
    expect(
      feedReducer(initialState, { type: types.wsOpen })
    ).toEqual({
      ...initialState,
      status: WebSocketStatus.ONLINE,
      connectionError: '',
    })
  })

  it('should handle wsClose', () => {
    expect(
      feedReducer(initialState, { type: types.wsClose })
    ).toEqual({
      ...initialState,
      status: WebSocketStatus.OFFLINE,
    })
  })

  it('should handle wsError', () => {
    const payload = 'Ошибка';

    expect(
      feedReducer(initialState, { type: types.wsError, payload })
    ).toEqual({
      ...initialState,
      connectionError: payload,
    })
  })

  it('should handle wsMessage', () => {
    const payload = ordersFeed;

    expect(
      feedReducer(initialState, { type: types.wsMessage, payload })
    ).toEqual({
      ...initialState,
      orders: payload.orders,
      total: payload.total,
      totalToday: payload.totalToday,
    })
  })
})
