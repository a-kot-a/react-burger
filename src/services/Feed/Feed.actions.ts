import { createAction } from "@reduxjs/toolkit";

export const wsConnect = createAction<string, 'FEED_WS_CONNECT'>('FEED_WS_CONNECT');
export const wsDisconnect = createAction('FEED_WS_DISCONNECT');
export const wsConnecting = createAction('FEED_WS_CONNECTING');
export const wsOpen = createAction('FEED_WS_OPEN');
export const wsClose = createAction('FEED_WS_CLOSE');
export const wsMessage = createAction<any, 'FEED_WS_MESSAGE'>('FEED_WS_MESSAGE');
export const wsError = createAction<string, 'FEED_WS_ERROR'>('FEED_WS_ERROR');

export type TFeedActions =
  | ReturnType<typeof wsConnect>
  | ReturnType<typeof wsDisconnect>
  | ReturnType<typeof wsConnecting>
  | ReturnType<typeof wsOpen>
  | ReturnType<typeof wsClose>
  | ReturnType<typeof wsMessage>
  | ReturnType<typeof wsError>;
