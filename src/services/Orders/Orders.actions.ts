import { createAction } from "@reduxjs/toolkit";

export const wsConnect = createAction<string, 'ORDERS_WS_CONNECT'>('ORDERS_WS_CONNECT');
export const wsDisconnect = createAction('ORDERS_WS_DISCONNECT');
export const wsConnecting = createAction('ORDERS_WS_CONNECTING');
export const wsOpen = createAction('ORDERS_WS_OPEN');
export const wsClose = createAction('ORDERS_WS_CLOSE');
export const wsMessage = createAction<any, 'ORDERS_WS_MESSAGE'>('ORDERS_WS_MESSAGE');
export const wsError = createAction<string, 'ORDERS_WS_ERROR'>('ORDERS_WS_ERROR');

export type TOrdersActions =
  | ReturnType<typeof wsConnect>
  | ReturnType<typeof wsDisconnect>
  | ReturnType<typeof wsConnecting>
  | ReturnType<typeof wsOpen>
  | ReturnType<typeof wsClose>
  | ReturnType<typeof wsMessage>
  | ReturnType<typeof wsError>;
