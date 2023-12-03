import { requestWithRefresh } from 'Utils/request';
import { AppDispatch, AppThunk } from 'Types/Store';
import { burgerConstructorClear } from 'Services/BurgerConstructor/BurgerConstructor.actions';
import {
  orderCheckoutFetchRequest,
  orderCheckoutFetchSuccess,
  orderCheckoutFetchError,
} from './OrderCheckout.actions';

export const orderCheckoutFetch: AppThunk = ingredients => (dispatch: AppDispatch) => {
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
