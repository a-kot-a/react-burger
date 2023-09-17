import { request } from "../../utils/request";
import { burgerConstructorClear } from '../BurgerConstructor/BurgerConstructor.actions';
import {
  orderDetailsFetchRequest,
  orderDetailsFetchSuccess,
  orderDetailsFetchError,
} from './OrderDetails.actions';

export const orderDetailsFetch = ingredients => dispatch => {
  dispatch(orderDetailsFetchRequest())

  request('orders', {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify({ ingredients: ingredients }),
  })
    .then(result => {
      dispatch(orderDetailsFetchSuccess(result));
      dispatch(burgerConstructorClear());
    })
    .catch(errors => { dispatch(orderDetailsFetchError(errors)) })
};
