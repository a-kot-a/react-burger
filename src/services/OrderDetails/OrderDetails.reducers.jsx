import { fromJS } from 'immutable';
import {
  ORDER_DETAILS_FETCH_REQUEST,
  ORDER_DETAILS_FETCH_SUCCESS,
  ORDER_DETAILS_FETCH_ERROR,
} from './OrderDetails.actions';

const initialState = fromJS({
  name: null,
  number: null,
  request: false,
  error: null,
});

const handleOrderDetailsFetchRequest = state =>
  state.set('error', false)
    .set('name', null)
    .set('number', null)
    .set('request', true);

const handleOrderDetailsFetchSuccess = (state, action) =>
  state.set('request', false)
    .set('error', false)
    .set('name', action.name)
    .set('number', action.order.number);

const handleOrderDetailsFetchError = (state, action) =>
  state.set('request', false)
    .set('name', null)
    .set('number', null)
    .set('error', action.errors);

const orderDetailsReducer = (state = initialState, action) => {
  const handlers = {
    [ORDER_DETAILS_FETCH_REQUEST]: handleOrderDetailsFetchRequest,
    [ORDER_DETAILS_FETCH_SUCCESS]: handleOrderDetailsFetchSuccess,
    [ORDER_DETAILS_FETCH_ERROR]: handleOrderDetailsFetchError,
  };

  return handlers[action.type] ? handlers[action.type](state, action) : state;
};

export default orderDetailsReducer;
