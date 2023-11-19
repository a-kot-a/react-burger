export const INGREDIENTS_FETCH_REQUEST = 'INGREDIENTS_FETCH_REQUEST';
export const INGREDIENTS_FETCH_SUCCESS = 'INGREDIENTS_FETCH_SUCCESS';
export const INGREDIENTS_FETCH_ERROR = 'INGREDIENTS_FETCH_ERROR';

export const ingredientsFetchRequest = () => ({
  type: INGREDIENTS_FETCH_REQUEST,
});

export const ingredientsFetchSuccess = result => ({
  type: INGREDIENTS_FETCH_SUCCESS,
  data: result,
});

export const ingredientsFetchError = errors => ({
  type: INGREDIENTS_FETCH_ERROR,
  errors,
});
