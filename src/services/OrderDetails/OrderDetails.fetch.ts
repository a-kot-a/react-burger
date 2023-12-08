import { request } from 'Utils/request';
import { AppThunk } from 'Types/Store';
import {
  orderDetailsFetchRequest,
  orderDetailsFetchSuccess,
  orderDetailsFetchError,
} from './OrderDetails.actions';

export const orderDetailsFetch = (number: string): AppThunk => dispatch => {
  dispatch(orderDetailsFetchRequest());

  request(`orders/${ number }`)
  .then(result => dispatch(orderDetailsFetchSuccess(result.orders[0])))
  .catch(errors => dispatch(orderDetailsFetchError(errors)))
};
