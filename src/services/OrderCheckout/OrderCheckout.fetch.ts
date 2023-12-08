import { requestWithRefresh } from 'Utils/request';
import { AppThunk } from 'Types/Store';
import { burgerConstructorClear } from 'Services/BurgerConstructor/BurgerConstructor.actions';
import {
  orderCheckoutFetchRequest,
  orderCheckoutFetchSuccess,
  orderCheckoutFetchError,
} from './OrderCheckout.actions';

export const orderCheckoutFetch = (ingredients: Array<string>): AppThunk => dispatch => {
  dispatch(orderCheckoutFetchRequest());

  requestWithRefresh('orders', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('accessToken')
    },
    method: 'POST',
    body: JSON.stringify({ ingredients: ingredients }),
  })
    .then(result => {
      dispatch(orderCheckoutFetchSuccess(result));
      dispatch(burgerConstructorClear());
    })
    .catch(errors => dispatch(orderCheckoutFetchError(errors)))
};
