import { WebSocketStatus } from '../../types/Ws';
import { IOrder } from 'Types/Order'
import { createReducer } from '@reduxjs/toolkit'
import { wsOpen, wsClose, wsMessage, wsError, wsConnecting } from './Orders.actions';

export type TOrdersState = {
  status: WebSocketStatus,
  connectionError: string,
  orders: Array<IOrder>,
  total: null | number,
  totalToday: null | number,
}

export const initialState: TOrdersState = {
  status: WebSocketStatus.OFFLINE,
  connectionError: '',
  orders: [],
  total: null,
  totalToday: null,
};

const ordersReducer = createReducer(initialState, (builder) => {
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
    })
});

export default ordersReducer;
