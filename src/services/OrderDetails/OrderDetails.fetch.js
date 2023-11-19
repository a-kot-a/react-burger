import { requestWithRefresh } from 'Utils/request';
import { burgerConstructorClear } from 'Services/BurgerConstructor/BurgerConstructor.actions';
import {
  orderDetailsFetchRequest,
  orderDetailsFetchSuccess,
  orderDetailsFetchError,
} from './OrderDetails.actions';

export const orderDetailsFetch = ingredients => dispatch => {
  dispatch(orderDetailsFetchRequest())

  requestWithRefresh('orders', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('accessToken')
    },
    method: 'POST',
    body: JSON.stringify({ ingredients: ingredients }),
  })
    .then(result => {
      dispatch(orderDetailsFetchSuccess(result));
      dispatch(burgerConstructorClear());
    })
    .catch(errors => dispatch(orderDetailsFetchError(errors)))
};
