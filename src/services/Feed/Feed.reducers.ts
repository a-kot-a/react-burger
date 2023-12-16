import { WebSocketStatus } from 'Types/Ws'
import { IOrder } from 'Types/Order'
import { createReducer } from '@reduxjs/toolkit'
import { wsOpen, wsClose, wsMessage, wsError, wsConnecting } from './Feed.actions';

export type TFeedState = {
  status: WebSocketStatus,
  connectionError: string,
  orders: Array<IOrder>,
  total: null | number,
  totalToday: null | number,
}

const initialState: TFeedState = {
  status: WebSocketStatus.OFFLINE,
  connectionError: '',
  orders: [],
  total: null,
  totalToday: null,
};

const feedReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(wsConnecting, (state) => {
      state.status = WebSocketStatus.CONNECTING;
    })
    .addCase(wsOpen, (state) => {
      state.status = WebSocketStatus.ONLINE;
      state.connectionError = '';
    })
    .addCase(wsClose, (state) => {
      state.status = WebSocketStatus.OFFLINE;
    })
    .addCase(wsError, (state, action) => {
      state.connectionError = action.payload;
    })
    .addCase(wsMessage, (state, action) => {
      state.orders = action.payload.orders;
      state.total = action.payload.total;
      state.totalToday = action.payload.totalToday;
    })
});

export default feedReducer;
