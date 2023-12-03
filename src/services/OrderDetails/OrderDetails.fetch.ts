import { request } from 'Utils/request';
import { AppDispatch, AppThunk } from 'Types/Store';
import {
  orderDetailsFetchRequest,
  orderDetailsFetchSuccess,
  orderDetailsFetchError,
} from './OrderDetails.actions';

export const orderDetailsFetch: AppThunk = number => (dispatch: AppDispatch) => {
  dispatch(orderDetailsFetchRequest());

  request(`orders/${ number }`)
  // @ts-ignore
  .then(result => dispatch(orderDetailsFetchSuccess(result.orders[0])))
  .catch(errors => dispatch(orderDetailsFetchError(errors)))
};
