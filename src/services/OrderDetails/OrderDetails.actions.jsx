export const ORDER_DETAILS_FETCH_REQUEST = 'ORDER_DETAILS_FETCH_REQUEST';
export const ORDER_DETAILS_FETCH_SUCCESS = 'ORDER_DETAILS_FETCH_SUCCESS';
export const ORDER_DETAILS_FETCH_ERROR = 'ORDER_DETAILS_FETCH_ERROR';

export const orderDetailsFetchRequest = () => ({
  type: ORDER_DETAILS_FETCH_REQUEST,
});

export const orderDetailsFetchSuccess = result => ({
  type: ORDER_DETAILS_FETCH_SUCCESS,
  ...result,
});

export const orderDetailsFetchError = errors => ({
  type: ORDER_DETAILS_FETCH_ERROR,
  errors,
});
