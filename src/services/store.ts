import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { webSocketMiddleware } from 'Services/WebSocket/WebSocket.middleware';
import { AppDispatch, RootState } from 'Types/Store';
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';

import {
  wsConnect as feedWsConnect,
  wsDisconnect as feedWsDisconnect,
  wsConnecting as feedWsConnecting,
  wsOpen as feedWsOpen,
  wsClose as feedWsClose,
  wsMessage as feedWsNessage,
  wsError as feedWsError
} from 'Services/Feed/Feed.actions';

import {
  wsConnect as ordersWsConnect,
  wsDisconnect as ordersWsDisconnect,
  wsConnecting as ordersWsConnecting,
  wsOpen as ordersWsOpen,
  wsClose as ordersWsClose,
  wsMessage as ordersWsNessage,
  wsError as ordersWsError
} from 'Services/Orders/Orders.actions';

const feedMiddleware = webSocketMiddleware({
  wsConnect: feedWsConnect,
  wsDisconnect: feedWsDisconnect,
  wsConnecting: feedWsConnecting,
  onOpen: feedWsOpen,
  onClose: feedWsClose,
  onError: feedWsError,
  onMessage: feedWsNessage,
});

const ordersMiddleware = webSocketMiddleware({
  wsConnect: ordersWsConnect,
  wsDisconnect: ordersWsDisconnect,
  wsConnecting: ordersWsConnecting,
  onOpen: ordersWsOpen,
  onClose: ordersWsClose,
  onError: ordersWsError,
  onMessage: ordersWsNessage,
});

const enhancer = composeWithDevTools(applyMiddleware(thunk, feedMiddleware, ordersMiddleware));

const store = createStore(rootReducer, enhancer);

export const useDispatch: () => AppDispatch = dispatchHook;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
